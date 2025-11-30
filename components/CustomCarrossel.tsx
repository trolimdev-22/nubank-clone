import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useEffect, useRef } from 'react';
import { AppState, Dimensions, Text, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';

// --- Seus dados ---
const data = [
    {
        id: 1,
        title: ' um novo jeito de aumentar seu limite',
        textBold: 'Nu Limite garantido:',
        icon: 'chart-line',
    },
    {
        id: 2,
        title: ' no crédito em até 12x, direto no app',
        textBold: 'Pague boletos',
        icon: 'chart-line',
    },
    {
        id: 3,
        title: 'Nubank vida: seguro de vida a partir de ',
        textBold: 'R$ 4/mês',
        icon: 'chart-line',
    },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const APP_PADDING = 24; // O padding da sua tela (ex: 'px-5')
const ITEM_WIDTH = SCREEN_WIDTH - APP_PADDING * 2; // A largura do "Meus Cartões"
const ITEM_GAP = 22; // O espaçamento que queremos entre os slides (ex: 'gap-4')

// --- O 'renderItem' (O Card) ---
const Card = ({ item }: { item: (typeof data)[0] }) => {
    return (
        <View
            className="flex-row items-center bg-gray-300 rounded-3xl px-4 mb-4"
            style={{ width: ITEM_WIDTH }}
        >
            <View className="flex-row flex-1 justify-center px-10 py-12 -top-3">
                <Text className="font-roboto-medium ">
                    {item.id === 1 || item.id === 2 ? (
                        <Text className="font-roboto-semiBold">
                            {item.textBold}
                            <Text className="font-roboto">{item.title}</Text>
                        </Text>
                    ) : item.id === 3 ? (
                        <Text className="font-roboto">
                            {item.title}
                            <Text className="font-roboto-semiBold">
                                {item.textBold}
                            </Text>
                        </Text>
                    ) : null}
                </Text>

                <MaterialCommunityIcons
                    name={item.icon as any}
                    size={30}
                    color="#830AD1"
                    className="mx-4"
                />
            </View>
        </View>
    );
};

const PaginationDot = ({ active }: { active: boolean }) => {
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(active ? 1 : 0.5, { duration: 500 }),
            transform: [
                { scale: withTiming(active ? 1.5 : 1, { duration: 300 }) },
            ],
        };
    }, [active]);

    return (
        <Animated.View
            className={`w-2 h-2 rounded-full ${active ? 'bg-nubank' : 'bg-gray-900'}`}
            style={animatedStyle}
        />
    );
};

export default function CustomCarrossel() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const snapToOffsets = data.map((_, index) => {
        return index * (ITEM_WIDTH + ITEM_GAP);
    });

    const flatListRef = useRef<Animated.FlatList | null>(null);

    const isAutoScrolling = useRef(false);

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (isAutoScrolling.current) {
            return;
        }
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    }).current;

    useEffect(() => {
        const appStateSubscription = AppState.addEventListener(
            'change',
            (nextAppState) => {
                if (nextAppState !== 'active') {
                    clearInterval(IntervalId);
                }
            }
        );

        const IntervalId = setInterval(() => {
            setActiveIndex((prevIndex) => {
                if (prevIndex === data.length - 1) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            });
        }, 4000);

        return () => {
            clearInterval(IntervalId);
            appStateSubscription.remove();
        };
    }, [activeIndex]);

    useEffect(() => {
        isAutoScrolling.current = true;
        flatListRef.current?.scrollToIndex({
            index: activeIndex,
            animated: true,
        });
    }, [activeIndex]);

    const getItemLayout = (_: any, index: number) => ({
        length: ITEM_WIDTH,
        offset: index * (ITEM_WIDTH + ITEM_GAP),
        index,
    });

    return (
        <View className="py-5">
            <Animated.FlatList
                data={data}
                ref={flatListRef}
                getItemLayout={getItemLayout}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // 8. Este 'style' dinâmico precisa ficar aqui
                snapToOffsets={snapToOffsets}
                decelerationRate="fast"
                contentContainerStyle={{
                    paddingHorizontal: APP_PADDING,
                }}
                ItemSeparatorComponent={() => (
                    <View style={{ width: ITEM_GAP }} />
                )}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onMomentumScrollEnd={() => {
                    isAutoScrolling.current = false;
                }}
            />
            <View className="absolute w-screen bottom-9">
                <View className="flex-row justify-center pt-2 gap-4 mb-4">
                    {data.map((_, index) => (
                        <PaginationDot
                            key={index}
                            active={index === activeIndex}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
}
