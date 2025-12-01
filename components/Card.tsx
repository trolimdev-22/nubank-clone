import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const data = [
    {
        id: 1,
        image: require('../assets/images/descubraMais/nuTag.jpeg'),
        titleBold: 'Novo: NuTag para Nubank+',
        body: 'Solicite sua tag de pedágios sem mensalidade.',
    },
    {
        id: 2,
        image: require('../assets/images/descubraMais/nubank-nucel.jpeg'),
        titleBold: 'Chegou NuCel',
        body: 'A experiência Nubank, agora em planos de celular.',
    },
    {
        id: 3,
        titleBold: 'Seguro de Vida',
        image: require('../assets/images/descubraMais/seguroVida.jpeg'),
        body: 'Cuide de quem você ama de um jeito simples e que cabe no seu bolso.',
    },
    {
        id: 4,
        image: require('../assets/images/descubraMais/seguros.jpeg'),
        titleBold: 'Área de Seguros do Nu',
        body: 'Toda proteção para você e quem você ama num só lugar.',
    },
    {
        id: 5,
        image: require('../assets/images/descubraMais/indiqueAmigos.jpeg'),
        titleBold: 'Indique o Nu para amigos',
        body: 'Espalhe como é simples estar no controle.',
    },
    {
        id: 6,
        image: require('../assets/images/descubraMais/portabilidadeSalario.jpeg'),
        titleBold: 'Portabilidade de salário',
        body: 'Liberdade é escolher onde receber seu dinheiro.',
    },
    {
        id: 7,
        image: require('../assets/images/descubraMais/menordeidade.jpeg'),
        titleBold: 'Conta para menores de 18',
        body: 'Solicite a conta para seus filhos a partir de 6 anos.',
    },
    {
        id: 8,
        image: require('../assets/images/descubraMais/termosdeuso.jpg'),
        titleBold: 'Termos de uso',
        body: 'Explicamos o que diz esse documento do Nubank.',
    },
];

export default function Card() {
    return (
        <FlatList
            contentContainerStyle={{
                paddingHorizontal: 20,
                gap: 10,
            }}
            bounces={true}
            alwaysBounceHorizontal={true}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
                <View className="w-[290px] h-[276px] bg-gray-300 rounded-xl">
                    <View className="flex-1 p-4 justify-between ">
                        <Image
                            source={item.image.toString()}
                            style={{
                                width: 290,
                                height: 120,
                                top: -14,
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                                alignSelf: 'center',
                            }}
                        />
                        <View className="flex-1 top-2">
                            <Text className="font-roboto-semiBold text-lg">
                                {item.titleBold}
                            </Text>
                            <Text numberOfLines={2} className="font-roboto">
                                {item.body}
                            </Text>
                        </View>
                        <View
                            className={`bg-nubank w-28 p-2 rounded-full justify-center items-center`}
                        >
                            <Text className="font-roboto-semiBold text-white text-xl">
                                Conhecer
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        />
    );
}
