import { ButtonCard } from '@/components/button-card';
import { Header } from '@/components/header';
import Icon from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import ModalScreen from '@/components/modal';
import { router } from 'expo-router';
import CustomCarrossel from '@/components/custom-carrossel';

export default function HomeScreen() {
    const [selected, setSelected] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const bottomSheetRef = React.useRef<BottomSheetModal>(null);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);

    const handleSelect = () => {
        setSelected(!selected);
    };

    const handleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View className="bg-nubank">
            <ScrollView overScrollMode="auto">
                <Header
                    icon={selected ? 'eye-slash' : 'eye'}
                    onPress={handleSelect}
                    // onPressModal={() => router.push('../components/menu')}
                    onPressModal={handleModal}
                />

                <ModalScreen
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={handleModal}
                />
                {/* <ModalTest ref={bottomSheetRef} /> */}
                {/* <App ref={bottomSheetRef}/> */}

                <View className="bg-gray-200">
                    <ButtonCard
                        title="Saldo em conta"
                        onPress={() => {}}
                        icon="chevron-right"
                    >
                        <View className="h-8 justify-center">
                            {selected ? (
                                <View className="flex-row mt-1">
                                    <Octicons name="dot-fill" size={12} />
                                    <Octicons name="dot-fill" size={12} />
                                    <Octicons name="dot-fill" size={12} />
                                    <Octicons name="dot-fill" size={12} />
                                </View>
                            ) : (
                                <Text className="text-[18px] font-roboto-medium">
                                    R$ 1.000000,00
                                </Text>
                                // <View className="h-[41px] justify-center items-center">
                                //     <Text className="text-[40px] font-roboto ">••••</Text>
                                // </View>
                            )}
                        </View>
                    </ButtonCard>

                    <ScrollView
                        className="flex-row"
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View className="flex-row px-10 gap-6">
                            <View className="flex-1">
                                <View className="w-[80px] h-[80px] rounded-full bg-gray-300 justify-center items-center">
                                    <Icon name="pix" size={24} color="black" />
                                </View>

                                <Text className="text-center font-roboto-semiBold text-lg mt-4">
                                    Area Pix e {'\n'}transferir
                                </Text>
                            </View>

                            <View className="flex-1">
                                <View className="w-[80px] h-[80px] rounded-full bg-gray-300 justify-center items-center">
                                    <Icon
                                        name="barcode"
                                        size={24}
                                        color="black"
                                    />
                                </View>
                                <Text className="text-center font-roboto-semiBold text-lg mt-4">
                                    Pagar
                                </Text>
                            </View>

                            <View className="flex-1">
                                <View className="w-[80px] h-[80px] rounded-full bg-gray-300 justify-center items-center">
                                    <MaterialIcons
                                        name="attach-money"
                                        size={24}
                                        color="black"
                                    />
                                </View>
                                <Text className="text-center font-roboto-semiBold text-lg mt-4">
                                    Pegar {'\n'} Emprestado
                                </Text>
                            </View>

                            <View className="flex-1 -ml-2">
                                <View className="w-[80px] h-[80px] rounded-full bg-gray-300 justify-center items-center">
                                    <Octicons
                                        name="device-mobile"
                                        size={24}
                                        color="black"
                                    />
                                </View>
                                <Text className="text-center font-roboto-semiBold text-lg mt-4">
                                    Recarga de {'\n'} Celular
                                </Text>
                            </View>
                            <View className="flex-1">
                                <View className="w-[80px] h-[80px] rounded-full bg-gray-300 justify-center items-center">
                                    <MaterialIcons
                                        name="savings"
                                        size={24}
                                        color="black"
                                    />
                                </View>
                                <Text className="text-center font-roboto-semiBold text-lg mt-4">
                                    Caixinhas e {'\n'} Investir
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    {/* <View className="justify-center items-center mt-8">
                <Pressable onPress={() => router.push('/modal-teste')}>
                    <Text className="text-lg font-roboto-medium">
                        Ir Para Modal Teste
                    </Text>
                </Pressable>
                
            </View> */}
                    <View className="mb-4">
                        <ButtonCard onPress={() => {}}>
                            <View className="flex-row gap-6 p-4 rounded-3xl bg-gray-300">
                                <MaterialCommunityIcons
                                    name="credit-card-multiple-outline"
                                    size={24}
                                    color="black"
                                />
                                <Text className="text-lg font-roboto-medium">
                                    Meus cartões
                                </Text>
                            </View>
                            <CustomCarrossel />
                        </ButtonCard>
                    </View>
                    <View className="w-screen border-t-2 border-gray-400/20">
                        <ButtonCard
                            title="Cartão de Crédito"
                            icon="chevron-right"
                        >
                            <View className="py-2">
                                <Text className="text-[16px] font-roboto">
                                    Fatura Atual
                                </Text>
                                <View className="h-8 justify-center">
                                    {selected ? (
                                        <View className="flex-row mt-1">
                                            <Octicons
                                                name="dot-fill"
                                                size={14}
                                            />
                                            <Octicons
                                                name="dot-fill"
                                                size={14}
                                            />
                                            <Octicons
                                                name="dot-fill"
                                                size={14}
                                            />
                                            <Octicons
                                                name="dot-fill"
                                                size={14}
                                            />
                                        </View>
                                    ) : (
                                        <Text className="pt-1 text-[16px] font-roboto-semiBold">
                                            R$ 20.0000,00
                                        </Text>
                                    )}
                                </View>
                            </View>
                        </ButtonCard>
                    </View>
                    <View className="w-screen border-t-2 border-gray-400/20">
                        <ButtonCard title="Empréstimo" icon="chevron-right">
                            <View className="py-2">
                                <Text className="text-[16px] font-roboto">
                                    Valor disponível de até
                                </Text>
                                <View className="h-8 justify-center">
                                    {selected ? (
                                        <View className="flex-row mt-1">
                                            <Octicons
                                                name="dot-fill"
                                                size={14}
                                            />
                                            <Octicons
                                                name="dot-fill"
                                                size={14}
                                            />
                                            <Octicons
                                                name="dot-fill"
                                                size={14}
                                            />
                                            <Octicons
                                                name="dot-fill"
                                                size={14}
                                            />
                                        </View>
                                    ) : (
                                        <Text className="pt-1 text-[16px] font-roboto-semiBold">
                                            R$ 150.0000,00
                                        </Text>
                                    )}
                                </View>
                            </View>
                        </ButtonCard>
                    </View>
                    <View className="w-screen border-t-2 border-gray-400/20">
                        <ButtonCard
                            title="Próximo pagamento"
                            icon="chevron-right"
                        >
                            <View className="py-2">
                                <Text className="text-[16px] font-roboto">
                                    Terça-feira,
                                    <Text className="font-roboto-medium">
                                        {' '}
                                        02 Dez
                                    </Text>
                                </Text>
                            </View>
                        </ButtonCard>
                    </View>
                    <View className="w-screen border-t-2 border-gray-400/20">
                        <ButtonCard title="Descubra mais">
                            <View className="py-2">
                                <Text className="text-[16px] font-roboto">
                                    Terça-feira,
                                    <Text className="font-roboto-semiBold">
                                        {' '}
                                        02 Dez
                                    </Text>
                                </Text>
                            </View>
                        </ButtonCard>
                    </View>
                    <View className="flex-row justify-center pt-10 pb-20">
                        <Icon name="heart" size={24} color="#8308d1" />
                        <Text className="text-xl font-roboto-medium ml-4 text-nubank">
                            Avalie esta tela
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
