import Icon from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { Text, View } from 'react-native';
import { ButtonIcon } from './button-icon';
import { ProfileIcon } from './profile-icon';

type Props = {
    icon: string;
    onPress: () => void;
    onPressModal: () => void;
};

export function Header({ onPress, icon, onPressModal }: Props) {
    return (
        <View className="bg-nubank">
            <View className="flex-row justify-between p-4">
                <ProfileIcon />
                <View className="flex-row">
                    <ButtonIcon icon={icon} onPress={onPress} />
                    {/* <ButtonIcon icon="circle-question" onPress={() => {}} /> */}
                    <ButtonIcon icon="bars" onPress={onPressModal} />
                </View>
            </View>

            <View className="flex-row px-8 py-4 justify-between">
                <View className="flex-1">
                    <Text className="font-roboto-medium text-xl text-white ">
                        Olá, Thiago
                    </Text>
                    <Text className="font-roboto text-base text-white mt-1">
                        Voçê é cliente{' '}
                        <Text className="text-base font-roboto-bold">
                            Nubank +
                        </Text>
                    </Text>
                </View>

                <Icon name="chevron-right" size={16} color="white" />
            </View>
        </View>
    );
}
