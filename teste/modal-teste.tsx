import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import {
    default as FontAwesome6,
    default as Icon,
} from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import {
    BottomSheetBackdrop,
    BottomSheetFlatList,
    BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import React, { forwardRef, useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';

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

const MenuModal = ({ modalRef }: any) => {
    const handlePress = useCallback(() => {
        modalRef.current?.dismiss();
    }, []);

    return (
        <Pressable onPress={handlePress}>
            <View className="flex-row items-center py-5 mx-8">
                <Icon name="xmark" size={24} onPress={handlePress} />
                <Text className="flex-1 text-center mr-5 text-[18px] font-roboto-medium">
                    Menu
                </Text>
            </View>
        </Pressable>
    );
};
const StickFooter = () => {
    return (
        <View className="flex-row justify-center w-screen gap-3 border-t-2 pt-3 pb-6 border-gray-400/20 bg-white ">
            <View className="h-14 w-14 justify-center items-center bg-gray-200 rounded-full">
                <Octicons name="gear" size={20} color="black" />
            </View>
            <View className="h-14 w-14 justify-center items-center bg-gray-200 rounded-full">
                <AntDesign name="user-add" size={24} color="black" />
            </View>
            <View className="h-14 w-14 justify-center items-center bg-gray-200 rounded-full">
                <AntDesign name="question-circle" size={20} color="black" />
            </View>
            <View className="flex-row justify-center items-center gap-3 px-8 bg-gray-200 rounded-full">
                <MaterialIcons name="security" size={20} color="black" />
                <Text className="text-lg font-roboto-medium">Segurança</Text>
            </View>
        </View>
    );
};

// const renderItemp = ({ item }: any) => {
//     return (
//         <View key={item.id} className="flex-row p-4 mx-4 items-center">
//             <IconRender family={item.family} name={item.icon} />

//             <Text className="ml-4 text-lg font-roboto-medium">
//                 {item.title}
//             </Text>
//             {item.title === 'NuCell' || item.title === 'NuScore' ? (
//                 <View className="flex-1 items-end">
//                     <View className="items-center bg-nubank px-[4px] rounded-[6px]">
//                         <Text className="text-white text-sm font-roboto-medium">
//                             Nubank+
//                         </Text>
//                     </View>
//                 </View>
//             ) : null}
//         </View>
//     );
// };

const renderItem = useCallback(({ item }: any) => (
    <View key={item.id} className="flex-row p-4 mx-4 items-center">
            <IconRender family={item.family} name={item.icon} />

            <Text className="ml-4 text-lg font-roboto-medium">
                {item.title}
            </Text>
            {item.title === 'NuCell' || item.title === 'NuScore' ? (
                <View className="flex-1 items-end">
                    <View className="items-center bg-nubank px-[4px] rounded-[6px]">
                        <Text className="text-white text-sm font-roboto-medium">
                            Nubank+
                        </Text>
                    </View>
                </View>
            ) : null}
        </View>

), []);

const ModalTeste = forwardRef<BottomSheetModal>((_, ref) => {
    const renderBackdrop = useCallback(
        (
            props: React.JSX.IntrinsicAttributes &
                BottomSheetDefaultBackdropProps
        ) => (
            <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                style={[props.style, { backgroundColor: 'rgba(0, 0, 0, 0.8)' }]}
                pressBehavior="close"
            />
        ),
        []
    );
    return (
        <BottomSheetModal
            ref={ref}
            enableOverDrag={true}
            enableContentPanningGesture={false}
            handleComponent={() => <MenuModal modalRef={ref} />}
            index={0}
            backdropComponent={renderBackdrop}
            snapPoints={['95%']}
            footerComponent={StickFooter}
        >
            <View className="flex-row bg-gray-400/15 rounded-full p-4 mx-4">
                <MaterialIcons name="search" size={24} color="#565454" />
                <Text className="ml-6 text-gray-600 text-lg font-roboto-medium">
                    Buscar
                </Text>
            </View>

            {/* <BottomSheetFlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.id}
            /> */}
            <View className="flex-1">
                <Text>Teste</Text>
            </View>

            {/* <StickFooter /> */}
        </BottomSheetModal>
    );
});

export default ModalTeste;
