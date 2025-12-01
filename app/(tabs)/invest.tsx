import { Header } from '@/components/Header';
import React from 'react';
import { Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function InvestScreen() {
    const insets = useSafeAreaInsets();

    return (
        <View className="flex-1">
            <View
                className=" bg-nubank"
                style={{
                    paddingTop: Platform.OS === 'ios' ? 10 : insets.top - 15,
                }}
            >
                <Header />

                <View className="flex-1 justify-center items-center bg-gray-200">
                    <Text className="font-roboto text-3xl">Invest Screen</Text>
                </View>
            </View>
        </View>
    );
}
