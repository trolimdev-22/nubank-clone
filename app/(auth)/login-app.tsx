import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Animated, {
    useAnimatedKeyboard,
    useAnimatedStyle,
} from 'react-native-reanimated';

export default function LoginAppScreen() {
    const [cpf, setCpf] = React.useState<string>('');
    const [isPressed, setIsPressed] = React.useState<boolean>(false);

    const keyboard = useAnimatedKeyboard();

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: -keyboard.height.value / 5 }],
        };
    });

    const formatarCPF = (text: string) => {
        // Remove tudo que não é dígito
        let value = text.replace(/\D/g, '');

        // Aplica a máscara
        if (value.length > 11) value = value.substring(0, 11); // Limita a 11 números

        value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o 1º ponto
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca o 2º ponto
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca o traço

        setCpf(value); // Atualiza o estado
    };

    const handlePressed = async () => {
        setIsPressed(!isPressed);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        router.replace('/login-password');
        setIsPressed(isPressed);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            className="bg-gray-200"
        >
            <View className="flex-1 bg-gray-200 justify-between ">
                <StatusBar style="dark" />
                <View className="justify-center mx-[24px]">
                    <Text className="font-roboto-medium text-[20px]">
                        Boas-vindas ao Nubank! Qual o seu CPF?
                    </Text>
                    <Text className="font-roboto text-gray-600 text-[14px] top-4">
                        Precisamos dele para iniciar o seu cadastro ou acessar o
                        aplicativo
                    </Text>
                    <View className="top-8">
                        <TextInput
                            placeholder="000.000.000-00"
                            passwordRules={'require: Uinimo 8 caracteres'}
                            placeholderTextColor="#9ca3af"
                            keyboardType="number-pad"
                            underlineColorAndroid="transparent"
                            maxLength={14}
                            className="text-[20px] font-roboto-medium"
                            autoFocus={true}
                            cursorColor="#8308d1"
                            disableKeyboardShortcuts={true}
                            value={cpf}
                            onChangeText={(text) => formatarCPF(text)} // Chama a função para formatar o CPF={}
                        />
                        <View className="h-[2px] bg-gray-300" />
                    </View>
                </View>
                <Animated.View
                    style={[
                        animatedStyle,
                        {
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            width: '100%',
                        },
                    ]}
                    className="items-end pb-8 pr-6"
                >
                    {cpf.length > 13 ? (
                        <TouchableOpacity
                            onPress={handlePressed}
                            className="w-16 h-16 rounded-full bg-nubank items-center justify-center"
                        >
                            {isPressed ? (
                                <ActivityIndicator size="large" color="white" />
                            ) : (
                                <Ionicons
                                    name="arrow-forward"
                                    size={24}
                                    color="white"
                                />
                            )}
                        </TouchableOpacity>
                    ) : (
                        <View className="w-16 h-16 rounded-full bg-gray-300 items-center justify-center">
                            <Ionicons
                                name="arrow-forward"
                                size={24}
                                color="gray"
                            />
                        </View>
                    )}
                </Animated.View>
            </View>
        </KeyboardAvoidingView>
    );
}
