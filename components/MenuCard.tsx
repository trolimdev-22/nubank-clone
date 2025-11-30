import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import {
    ActivityIndicator,
    Modal,
    Pressable,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const data = [
    {
        id: 1,
        title: 'Conta',
        icon: 'account-box-multiple-outline',
        family: 'MaterialCommunityIcons',
    },
    {
        id: 2,
        title: 'Meus cartões',
        icon: 'credit-card-multiple-outline',
        family: 'MaterialCommunityIcons',
    },
    {
        id: 3,
        title: 'Minha fatura',
        icon: 'file-document-alert-outline',
        family: 'MaterialCommunityIcons',
    },
    {
        id: 4,
        title: 'Assistente de pagamentos',
        icon: 'payments',
        family: 'MaterialIcons',
    },
    {
        id: 5,
        title: 'Empréstimos',
        icon: 'attach-money',
        family: 'MaterialIcons',
    },
    {
        id: 6,
        title: 'Seguros',
        icon: 'insurance',
        family: 'AntDesign',
    },
    {
        id: 7,
        title: 'Investimentos',
        icon: 'wallet-outline',
        family: 'Ionicons',
    },
    {
        id: 8,
        title: 'Shopping',
        icon: 'shopping-outline',
        family: 'MaterialCommunityIcons',
    },
    {
        id: 9,
        title: 'NuScore',
        icon: 'score',
        family: 'MaterialIcons',
    },
    {
        id: 10,
        title: 'Transfêrencias',
        icon: 'bank-transfer',
        family: 'MaterialCommunityIcons',
    },
    {
        id: 11,
        title: 'Depósitos',
        icon: 'bank-circle-outline',
        family: 'MaterialCommunityIcons',
    },
    {
        id: 12,
        title: 'NuCel',
        icon: 'mobile',
        family: 'Entypo',
    },
    {
        id: 13,
        title: 'Sair',
        icon: 'exit-to-app',
        family: 'MaterialIcons',
        action: 'logout',
    },
];

const IconRender = ({ family, name, size = 24, color = 'black' }: any) => {
    if (family === 'AntDesign') {
        return <AntDesign name={name} size={size} color={color} />;
    }
    if (family === 'MaterialCommunityIcons') {
        return <MaterialCommunityIcons name={name} size={size} color={color} />;
    }
    if (family === 'Ionicons') {
        return <Ionicons name={name} size={size} color={color} />;
    }
    if (family === 'MaterialIcons') {
        return <MaterialIcons name={name} size={size} color={color} />;
    }
    if (family === 'FontAwesome6') {
        return <FontAwesome6 name={name} size={24} color={color} />;
    }
    if (family === 'Ionicons') {
        return <Ionicons name={name} size={size} color={color} />;
    }
    if (family === 'Entypo') {
        return <Entypo name={name} size={size} color={color} />;
    }
    return null;
};

export default function Menucard() {
    const [isLoading, setIsLoading] = React.useState(false);
    const { dismiss } = useBottomSheetModal();

    const handleDeleteStore = async () => {
        await SecureStore.deleteItemAsync('nubank-app-auth-key');
        await SecureStore.deleteItemAsync('nubank-app-auth-token');
        await SecureStore.deleteItemAsync('nubank-clone-auth-token');
        await new Promise((resolve) => setTimeout(resolve, 4000));

        router.replace('/welcome');
    };
    const handleItemPress = async (item: any) => {
        if (item.action === 'logout') {
            

            setIsLoading(true);

            try {
                await handleDeleteStore();
                dismiss();
                setIsLoading(false);
            } catch (error) {
                console.log(error);                
            }
        } else {
            return;
        }
    };

    return (
        <View>
            {data.map((item: any) => (
                <View key={item.id.toString()}>
                    <TouchableOpacity
                        onPress={() => handleItemPress(item)}
                        className="py-5 px-2 rounded-full"
                    >
                        <View className="flex-row">
                            <IconRender
                                family={item.family.toString()}
                                name={item.icon.toString()}
                                color={item.id === 13 ? '#8308d1' : 'black'}
                            />

                            <Text className="ml-4 text-lg font-roboto-medium">
                                {item.title}
                            </Text>

                            {item.title === 'NuCel' ||
                            item.title === 'NuScore' ? (
                                <View className="flex-1 items-end">
                                    <View className="items-center bg-nubank px-[4px] py-[2px] rounded-[6px]">
                                        <Text className="text-white text-sm font-roboto-medium">
                                            Nubank+
                                        </Text>
                                    </View>
                                </View>
                            ) : null}
                        </View>
                    </TouchableOpacity>
                </View>
            ))}

            <Modal
                transparent={true}
                visible={isLoading}
                animationType="fade"
                statusBarTranslucent={true}
            >
                <Pressable className="flex-1" onPress={() => dismiss()}>
                    <View className="flex-1 items-center justify-center ">
                        <View className="items-center justify-center shadow-2xl">
                            <ActivityIndicator size="large" color="#8308d1" />
                            <Text className="mt-4 font-roboto-medium">
                                Saindo...
                            </Text>
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
}
