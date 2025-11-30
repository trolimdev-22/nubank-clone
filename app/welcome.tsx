import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
    Easing,
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

export default function Welcome() {
    const animationProgress = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        const size = interpolate(
            animationProgress.value,
            [0, 1],
            [
                Platform.OS === 'ios' ? 900 : 850,
                Platform.OS === 'ios' ? 650 : 600,
            ],
            Extrapolation.CLAMP
        );

        const opacity = interpolate(
            animationProgress.value,
            [0, 1],
            [0, 1],
            Extrapolation.CLAMP
        );

        return {
            width: size,
            height: size,
            opacity: opacity,
        };
    });

    useEffect(() => {
        animationProgress.value = withTiming(1, {
            duration: 2000,
            easing: Easing.out(Easing.exp),
        });
    }, []);

    return (
        <View className="flex-1 items-center">
            <StatusBar style="light" />
            <View
                className={`${Platform.OS === 'ios' ? 'left-[2px] bottom-3' : 'left-[6px] bottom-2'} `}
            >
                <Animated.Image
                    source={require('../assets/images/cartao-nubank.png')}
                    style={[
                        animatedStyle,
                        {
                            transform: [
                                {
                                    rotate: '1deg',
                                        
                                },
                            ],
                        },
                    ]}
                    resizeMode="contain"
                />
            </View>
            <View className="flex-1 px-6 justify-end">
                <Text className="font-roboto-medium text-start text-gray-700 text-[28px] mb-6">
                    Um mundo financeiro sem complexidades
                </Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    className="items-center bg-nubank p-4 rounded-full mb-14"
                    onPress={() => router.replace('/login-app')}
                >
                    <Text className="text-white font-roboto-medium">
                        Começar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
