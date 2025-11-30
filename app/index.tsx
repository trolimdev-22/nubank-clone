// app/index.tsx

import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

// Use a MESMA chave que você usou na tela de login
const TOKEN_KEY = 'nubank-clone-auth-token';

export default function RootIndex() {
    const [isChecking, setIsChecking] = useState(true);

    const checkLoginStatus = async () => {
        try {
            // 1. Tenta buscar o token salvo
            const token = await SecureStore.getItemAsync(TOKEN_KEY);

            // 2. Atraso artificial rápido (opcional, só para não piscar muito rápido)
           await new Promise((resolve) => setTimeout(resolve, 1000));

            if (token) {
                // SE TIVER TOKEN -> Vai para a Home (tabs)
                // .replace impede de voltar para esta tela de loading
                router.replace('/login-bio');
                console.log(token);
            } else {
                // SE NÃO TIVER TOKEN -> Vai para o sign-in
                router.replace('/welcome');
            }
        } catch (error) {
            // Se der erro, manda pro login por segurança
            router.replace('/login-bio');
        } finally {
            setIsChecking(!isChecking);
        }
    };

    useEffect(() => {
        checkLoginStatus();
    }, []);

    // Enquanto verifica, mostra um loading roxo no centro
    return (
        <View className="flex-1 bg-nubank justify-center items-center">
            <Image
                source={require('../assets/images/nubank.png')}
                style={{ width: 160, height: 160 }}
                resizeMode="contain"
            />
        </View>
    );
}
