import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Alert, Image, Pressable, Text, View } from 'react-native';

const TOKEN_KEY = 'nubank-clone-auth-token';

export default function LoginScreen() {
    const [showBiometricLogin, setShowBiometricLogin] =
        React.useState<boolean>(false);
    const handleBiometricLogin = async () => {
        try {
            // 2. Verifica se o celular tem biometria
            const hasHardware = await LocalAuthentication.hasHardwareAsync();
            const isEnrolled = await LocalAuthentication.isEnrolledAsync();

            if (!hasHardware || !isEnrolled) {
                setShowBiometricLogin(showBiometricLogin);
                return;
            }

            // 3. Pede para autenticar
            const auth = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Biometric',
                fallbackLabel: 'Use Nubank Password',
            });

            // 4. Se deu certo, entra!

            if (auth.success) {
                
                const token = await SecureStore.getItemAsync(TOKEN_KEY);
                const savePassword = await AsyncStorage.getItem(
                    'user_database_password'
                );
                setShowBiometricLogin(false);

                if (token === savePassword && token !== null) {
                    await new Promise((resolve) => setInterval(resolve, 1000));

                    router.replace('/(tabs)');
                } else {
                    Alert.alert(
                        'Erro',
                        'Sessão inválida. Faça login com senha novamente.'
                    );
                    setShowBiometricLogin(true);
                }
            } else {
                setShowBiometricLogin(false);
            }
        } catch (error) {
            Alert.alert(`${error}`, 'Falha na autenticação biométrica');
             
            console.log(error);
        }
    };

    useEffect(() => {
        handleBiometricLogin();
    }, []);

    return (
        <View className="flex-1 justify-end bg-nubank ">
            <StatusBar style="light" />
            <View className="flex-1 items-center justify-center top-10">
                <Image
                    source={require('../../assets/images/nubank.png')}
                    style={{ width: 160, height: 160 }}
                    resizeMode="contain"
                />
            </View>

            <Pressable
                className="items-center bg-white mx-10 bottom-14 p-4 rounded-full"
                onPress={handleBiometricLogin}
            >
                <Text className="text-xl text-textBlack font-roboto-medium">
                    Usar senha do Celular
                </Text>
            </Pressable>

            {showBiometricLogin ? (
                <Pressable
                    className="items-center bg-white mx-10 bottom-10 p-4 rounded-full"
                    onPress={() => router.replace('/login-password')}
                >
                    <Text className="text-xl text-textBlack font-roboto-medium">
                        Usar senha do Nubank
                    </Text>
                </Pressable>
            ) : null}
        </View>
    );
}
