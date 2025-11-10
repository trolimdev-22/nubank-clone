import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import React from 'react';
import { Text, View } from 'react-native';

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
        title: 'NuCell',
        icon: 'mobile',
        family: 'Entypo',
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
        return <FontAwesome6 name="dollar" size={24} color="black" />;
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
    return (
        <View className="my-8 gap-y-8 ">
            {data.map((item) => (
                <View
                    key={item.id}
                    className="flex-row items-center"
                >
                    <IconRender family={item.family} name={item.icon} />

                    <Text className="ml-4 text-lg font-roboto-medium">
                        {item.title}
                    </Text>
                    {item.title === 'NuCell' || item.title === 'NuScore' ? (
                        <View className="flex-1 items-end">
                            <View className="items-center bg-nubank px-[4px] py-[2px] rounded-[6px]">
                                <Text className="text-white text-sm font-roboto-medium">
                                    Nubank+
                                </Text>
                            </View>
                        </View>
                    ) : null}
                </View>
            ))}
        </View>
    );
}
