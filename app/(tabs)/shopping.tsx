import { Header } from '@/components/Header';
import React from 'react';
import { Text, View } from 'react-native';

export default function ShoppingScreen() {
    const [selected, setSelected] = React.useState<boolean>(false);

    const handleSelect = () => {
        setSelected(!selected);
    };

    return (
        <View className="flex-1">
            <Header
                icon={selected ? 'eye-slash' : 'eye'}
                onPress={handleSelect}
            />
            <View className="flex-1 justify-center bg-gray-200 items-center">
                <Text className="font-roboto text-3xl">Shopping Screen</Text>
            </View>
        </View>
    );
}
