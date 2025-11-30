import Icon from '@expo/vector-icons/FontAwesome6';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { ButtonIcon } from './ButtonIon';
import { ModalScreen } from './ModalScreen';
import { ProfileIcon } from './ProfileIcon';

type Props = {
    icon: string;
    onPress: () => void;
};

export function Header({ onPress, icon }: Props) {
    const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    return (
        <View className="bg-nubank">
            <View className="flex-row justify-between p-4">
                <ProfileIcon />
                <View className="flex-row">
                    <ButtonIcon icon={icon} onPress={onPress} />

                    <ButtonIcon icon="bars" onPress={handlePresentModalPress} />
                </View>
                <ModalScreen ref={bottomSheetModalRef} />
            </View>
            <Pressable
                onPress={() => Alert.alert('Nubank+', 'Você é cliente Nubank+')}
            >
                <View className="flex-row px-8 py-4 justify-between">
                    <View>
                        <Text className="font-roboto-medium text-xl text-white ">
                            Olá,
                        </Text>
                        <Text className="font-roboto text-base text-white mt-1">
                            Você é cliente{' '}
                            <Text className="text-base font-roboto-bold">
                                Nubank +
                            </Text>
                        </Text>
                    </View>

                    <Icon name="chevron-right" size={16} color="white" />
                </View>
            </Pressable>
        </View>
    );
}
