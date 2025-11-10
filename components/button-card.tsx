import Icon from '@expo/vector-icons/FontAwesome6';
import React, { ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';

type Props = {
    title?: string;
    onPress?: () => void;
    children: ReactNode;
    icon?: string;
};
export function ButtonCard({ title, onPress, icon, children }: Props) {
    return (
        <Pressable onPress={onPress} className="px-8 py-5">
            <View className="flex-row justify-between items-center">
                <Text className="text-[18px] font-roboto-medium">{title}</Text>
                <Icon name={icon} size={16} color="#565454" />
            </View>
            {children}
        </Pressable>
    );
}
