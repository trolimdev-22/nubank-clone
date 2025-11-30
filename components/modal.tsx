import AntDesign from '@expo/vector-icons/AntDesign';
import Icon from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import React from 'react';
import {
    Modal,
    ModalProps,
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';
import Menucard from './MenuCard';

type Props = ModalProps & {
    animationType: string;
    visible: boolean;
    onRequestClose: () => void;
};

export default function ModalScreen({
    animationType,
    visible,
    onRequestClose,
    ...props
}: Props) {
    return (
        <Modal
            animationType={animationType}
            visible={visible}
            onRequestClose={onRequestClose}
            statusBarTranslucent={true}
            backdropColor="rgba(0, 0, 0, 0.3)"
            {...props}
        >
            <Pressable onPress={onRequestClose} className="flex-1">
                <View className="flex-1 rounded-t-3xl mt-[120px] bg-white px-8">
                    <Pressable className="flex-1" onPress={onRequestClose}>
                        <View className="flex-row items-center py-5">
                            <Icon
                                name="xmark"
                                size={24}
                                onPress={onRequestClose}
                            />
                            <Text className="flex-1 text-center mr-5 text-[18px] font-roboto-medium">
                                Menu
                            </Text>
                        </View>

                        <ScrollView
                            className="flex-1"
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingVertical: 10 }}
                            overScrollMode="auto"
                        >
                            <Pressable>
                                <View className="flex-row bg-gray-400/15 rounded-full p-4">
                                    <MaterialIcons
                                        name="search"
                                        size={24}
                                        color="#565454"
                                    />
                                    <Text className="ml-6 text-gray-600 text-lg font-roboto-medium">
                                        Buscar
                                    </Text>
                                </View>
                                <Menucard />
                            </Pressable>
                        </ScrollView>
                    </Pressable>
                </View>
            </Pressable>

            <View className="flex-row h-24 w-screen gap-3 border-t-2 border-gray-400/20 items-center bg-white px-6 pb-3">
                <View className="h-14 w-14 justify-center items-center bg-gray-200 rounded-full">
                    <Octicons name="gear" size={20} color="black" />
                </View>
                <View className="h-14 w-14 justify-center items-center bg-gray-200 rounded-full">
                    <AntDesign name="user-add" size={24} color="black" />
                </View>
                <View className="h-14 w-14 justify-center items-center bg-gray-200 rounded-full">
                    <AntDesign name="question-circle" size={20} color="black" />
                </View>
                <View className="flex-1 flex-row px-8 py-4 justify-center items-center gap-3 bg-gray-200 rounded-full">
                    <MaterialIcons name="security" size={20} color="black" />
                    <Text className="text-lg font-roboto-medium">
                        Segurança
                    </Text>
                </View>
            </View>
        </Modal>
    );
}
