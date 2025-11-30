import Menucard from '@/components/MenuCard';
import AntDesign from '@expo/vector-icons/AntDesign';
import Icon from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import React, { forwardRef, useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';

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
        <View className="flex-row w-screen gap-4 border-t-2 border-gray-400/20 p-4 bg-white px-8 pb-6 ">
            <View className="h-14 w-14 justify-center items-center bg-gray-200 rounded-full">
                <Octicons name="gear" size={20} color="black" />
            </View>
            <View className="h-14 w-14 justify-center items-center bg-gray-200 rounded-full">
                <AntDesign name="user-add" size={24} color="black" />
            </View>
            <View className="h-14 w-14 justify-center items-center bg-gray-200 rounded-full">
                <AntDesign name="question-circle" size={20} color="black" />
            </View>
            <View className="flex-row h-14 justify-center items-center gap-3 px-5 bg-gray-200 rounded-full">
                <MaterialIcons name="security" size={20} color="black" />
                <Text className="text-lg font-roboto-medium">Segurança</Text>
            </View>
        </View>
    );
};

export const ModalTest = forwardRef<BottomSheetModal>((_, ref) => {
    // const renderBackdrop = useCallback(
    //     (
    //         props: React.JSX.IntrinsicAttributes &
    //             BottomSheetDefaultBackdropProps
    //     ) => (
    //         <BottomSheetBackdrop
    //             {...props}
    //             appearsOnIndex={0}
    //             disappearsOnIndex={-1}
    //             style={[props.style, { backgroundColor: 'rgba(0, 0, 0, 0.8)' }]}
    //             pressBehavior="close"
    //         />
    //     ),
    //     []
    // );
    return (
        <BottomSheetModal
            ref={ref}
            snapPoints={['85%']}
            index={0}
            // backdropComponent={renderBackdrop}
            handleComponent={() => <MenuModal modalRef={ref} />}
            enableOverDrag={true}
            enableContentPanningGesture={false}
        >
            <BottomSheetScrollView
                className="mx-8"
                showsVerticalScrollIndicator={false}
            >
                <View className="flex-row bg-gray-400/15 rounded-full p-4">
                    <MaterialIcons name="search" size={24} color="#565454" />
                    <Text className="ml-6 text-gray-600 text-lg font-roboto-medium">
                        Buscar
                    </Text>
                </View>
                <Menucard />

                {/* <View
                    style={{
                        height: 1500,
                        backgroundColor: 'rgba(255, 0, 0, 0.3)',
                    }}
                >
                    <Text>ÁREA DE TESTE ROLÁVEL</Text>
                </View> */}
            </BottomSheetScrollView>
            <StickFooter />
        </BottomSheetModal>
    );
});
