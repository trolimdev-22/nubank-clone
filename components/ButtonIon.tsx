import Icon from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { Pressable } from 'react-native';

type Props = {
    icon: string;
    onPress: () => void;
};
export function ButtonIcon({ icon, onPress }: Props) {
    return (
        <Pressable
            onPress={onPress}
            className="size-14 justify-center items-center"
        >
            <Icon name={icon} size={18} color="white" />
        </Pressable>
    );
}
