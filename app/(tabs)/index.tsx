import { ButtonCard } from '@/components/ButtonCard';
import Card from '@/components/Card';
import CustomCarrossel from '@/components/CustomCarrossel';
import { Header } from '@/components/Header';
import Icon from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const [selected, setSelected] = useState(false);
    const insets = useSafeAreaInsets();

    const handleSelect = () => {
        setSelected(!selected);
    };

    return (
        <View className="flex-1 bg-gray-200">
            <StatusBar
                style="light"
                translucent={true}
                backgroundColor="transparent"
            />
            <View
                className="bg-nubank"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '70%',
                }}
            />
            <ScrollView
                overScrollMode="always"
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="always"
                bounces={true}
                scrollEventThrottle={16}
                style={{ backgroundColor: 'transparent' }}
            >
                <View
                    className=" bg-nubank"
                    style={{
                        paddingTop:
                            Platform.OS === 'ios' ? 10 : insets.top - 15,
                    }}
                >
                    <Header
                        icon={selected ? 'eye-slash' : 'eye'}
                        onPress={handleSelect}
                    />

                    <View className="bg-gray-200">
                        <View className="py-2">
                            <ButtonCard
                                title="Saldo em conta"
                                onPress={() => {}}
                                icon="chevron-right"
                            >
                                <View className="h-8 justify-center">
                                    {selected ? (
                                        <View className="flex-row mt-1">
                                            <Octicons
                                                name="dot-fill"
                                                size={12}
                                            />
                                            <Octicons
                                                name="dot-fill"
                                                size={12}
                                            />
                                            <Octicons
                                                name="dot-fill"
                                                size={12}
                                            />
                                            <Octicons
                                                name="dot-fill"
                                                size={12}
                                            />
                                        </View>
                                    ) : (
                                        <Text className="text-[18px] font-roboto-medium">
                                            R$ 1.000000,00
                                        </Text>
                                    )}
                                </View>
                            </ButtonCard>
                        </View>
                        <ScrollView
                            className="flex-row"
                            bounces={true}
                            overScrollMode="always"
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View className="flex-row px-8 gap-4 -mb-2">
                                <View className="items-center">
                                    <View className="w-[80px] h-[80px] rounded-full bg-gray-300 justify-center items-center">
                                        <Icon
                                            name="pix"
                                            size={24}
                                            color="black"
                                        />
                                    </View>

                                    <Text className="text-center font-roboto-semiBold text-lg top-1">
                                        Area Pix e {'\n'}transferir
                                    </Text>
                                </View>

                                <View className="items-center">
                                    <View className="w-[80px] h-[80px] rounded-full bg-gray-300 justify-center items-center">
                                        <Icon
                                            name="barcode"
                                            size={24}
                                            color="black"
                                        />
                                    </View>
                                    <Text className="text-center font-roboto-semiBold text-lg top-1">
                                        Pagar
                                    </Text>
                                </View>

                                <View className="items-center">
                                    <View className="w-[80px] h-[80px] rounded-full bg-gray-300 justify-center items-center">
                                        <MaterialIcons
                                            name="attach-money"
                                            size={24}
                                            color="black"
                                        />
                                    </View>

                                    <View className="bottom-5 justify-center items-center rounded bg-nubank">
                                        <Text className="px-1 text-white text-[14px] font-roboto-medium">
                                            R$150.000
                                        </Text>
                                    </View>

                                    <Text className="text-center font-roboto-semiBold text-lg bottom-4">
                                        Pegar {'\n'} Emprestado
                                    </Text>
                                </View>

                                <View className="items-center">
                                    <View className="w-[80px] h-[80px] rounded-full bg-gray-300 justify-center items-center">
                                        <Octicons
                                            name="device-mobile"
                                            size={24}
                                            color="black"
                                        />
                                    </View>
                                    <Text className="text-center font-roboto-semiBold text-lg top-1">
                                        Recarga de {'\n'} Celular
                                    </Text>
                                </View>
                                <View className="items-center">
                                    <View className="w-[80px] h-[80px] rounded-full bg-gray-300 justify-center items-center">
                                        <MaterialIcons
                                            name="savings"
                                            size={24}
                                            color="black"
                                        />
                                    </View>
                                    <Text className="text-center font-roboto-semiBold text-lg top-1">
                                        Caixinhas e {'\n'} Investir
                                    </Text>
                                </View>
                            </View>
                        </ScrollView>

                        <ButtonCard onPress={() => {}}>
                            <View className="flex-row gap-6 p-5 rounded-3xl bg-gray-300 ">
                                <MaterialCommunityIcons
                                    name="credit-card-multiple-outline"
                                    size={24}
                                    color="black"
                                />
                                <Text className="text-lg font-roboto-medium">
                                    Meus cartões
                                </Text>
                            </View>
                        </ButtonCard>

                        <CustomCarrossel />

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
                            <ButtonCard title="Descubra mais" />
                        </View>

                        <Card />

                        <View className="flex-row justify-center pt-10 pb-36">
                            <Icon name="heart" size={24} color="#8A05BE" />
                            <Text className="text-xl font-roboto-medium ml-4 text-nubank">
                                Avalie esta tela
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
