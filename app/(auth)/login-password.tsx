import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Animated, {
    useAnimatedKeyboard,
    useAnimatedStyle,
} from 'react-native-reanimated';

const TOKEN_KEY = 'nubank-clone-auth-token';

export default function LoginPasswordScreen() {
    const [isPressed, setIsPressed] = React.useState<boolean>(false);
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    const [password, setPassword] = React.useState<string>('');

    const keyboard = useAnimatedKeyboard();

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: -keyboard.height.value / 5 }],
        };
    });

    const handleAppPasswordLogin = async () => {
        setIsPressed(!isPressed);

        if (!password) {
            Alert.alert('Error', 'Please enter a password.');
            return;
        }

        try {
            await AsyncStorage.setItem('user_database_password', password);

            await SecureStore.setItemAsync(TOKEN_KEY, password, {
                requireAuthentication: false,
                authenticationPrompt: 'Login with Nubank Password',
            });

            const token = await SecureStore.getItemAsync(TOKEN_KEY);

            const auth = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Biometrics',
                fallbackLabel: 'Use Password',
            });

            if (token === password && auth.success) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                router.replace('/(tabs)');

                console.log(
                    'Sucesso',
                    'Login realizado e Biometria habilitada para a próxima vez!'
                );
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Error:', `${error}`);
        }
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
                    <Text className="font-roboto-medium text-[24px]">
                        Agora digite sua senha do aplicativo
                    </Text>

                    <View className="top-8 flex-row justify-between items-center">
                        <View className="flex-1">
                            <TextInput
                                placeholder="8 digitos ou mais"
                                placeholderTextColor="#9ca3af"
                                secureTextEntry={!isVisible}
                                style={{ fontFamily: 'Roboto-Medium' }}
                                className="text-[26px] font-roboto-medium right-px-1"
                                autoFocus={true}
                                renderToHardwareTextureAndroid={false}
                                cursorColor="#8308d1"
                                disableKeyboardShortcuts={true}
                                value={password}
                                onChangeText={(text) => setPassword(text)}

                                // Chama a função para formatar o CPF={}
                            />
                        </View>
                        <Pressable onPress={() => setIsVisible(!isVisible)}>
                            <Ionicons
                                name={!isVisible ? 'eye-off' : 'eye'}
                                size={24}
                                color={'#535353'}
                            />
                        </Pressable>
                    </View>
                    <View
                        className={`${Platform.OS === 'ios' ? 'top-10' : 'top-6'}`}
                    >
                        <View className="h-[2px] bg-gray-300" />
                        <Text
                            className={`font-roboto-medium text-gray-800 ${Platform.OS === 'ios' ? 'text-[16px]' : 'text-[12px]'} top-1`}
                        >
                            Essa é aquela senha que você cadastrou quando criou
                            a sua conta.
                        </Text>
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
                    {password.length > 7 ? (
                        <TouchableOpacity
                            onPress={handleAppPasswordLogin}
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
