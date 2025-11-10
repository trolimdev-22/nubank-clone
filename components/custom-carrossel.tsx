import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const data = [
    {
        id: 1,
        title: 'Agora vc pode antecipar o seu saque-aniversario do FGTS',
        icon: 'chart-line',
    },
    {
        id: 2,
        title: 'Aumente seu limite do cartão hoje com o Nu Limite Garantido',
        icon: 'chart-line',
    },
    {
        id: 3,
        title: 'Adicione seu cartão de crédito ou debito e ganhe 5% de desconto',
        icon: 'chart-line',
    },
];

const { width: SLIDER_WIDTH } = Dimensions.get('window');

const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const renderItem = ({ item }: any) => {
    return (
        <View className={`w-[${ITEM_WIDTH}px] h-[120px]`}>
            <Text className="flex-1 font-roboto">{item.title}</Text>
            <MaterialCommunityIcons
                name={item.icon}
                size={30}
                color="#830AD1"
            />
        </View>
    );
};
export default function CustomCarrossel() {
    return (
        <View className="py-[20px]">
            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
            />
        </View>
    );
}
