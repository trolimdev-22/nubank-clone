import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { BlurView } from 'expo-blur';
import React, { useEffect } from 'react';
import { Dimensions, Platform, Pressable, Text, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

const GetIcon = ({
    routeName,
    isFocused,
}: {
    routeName: string;
    isFocused: boolean;
}) => {
    if (routeName === 'index') {
        return (
            <View className="flex-row justify-center items-center">
                <AntDesign
                    name="arrow-down"
                    size={22}
                    color={isFocused ? '#8A05BE' : '#5a595b'}
                />

                <AntDesign
                    name="arrow-up"
                    size={22}
                    color={isFocused ? '#8A05BE' : '#5a595b'}
                />
            </View>
        );
    }
    if (routeName === 'invest') {
        return (
            <FontAwesome6
                name="dollar"
                size={22}
                color={isFocused ? '#8A05BE' : '#5a595b'}
            />
        );
    }
    if (routeName === 'shopping') {
        return (
            <MaterialCommunityIcons
                name="shopping-outline"
                size={22}
                color={isFocused ? '#8A05BE' : '#5a595b'}
            />
        );
    }

    if (routeName === 'nucel') {
        return (
            <AntDesign
                name="mobile"
                size={22}
                color={isFocused ? '#8A05BE' : '#5a595b'}
            />
        );
    }
};

const ITEM_WIDTH = Platform.OS === 'ios' ? 70 : 60; // largura do botão
const { width } = Dimensions.get('window'); // largura da tela
const TAB_BAR_WIDTH = width * (Platform.OS === 'ios' ? 0.687 : 0.66); // largura da TabBar
const ITEM_SLOT_WIDTH = TAB_BAR_WIDTH / 4; // quantidade de abas
export default function CustomTabBar({ state, navigation, descriptors }: any) {
    const activeIndex = state.index;
    const translateX = useSharedValue<number>(activeIndex);

    useEffect(() => {
        const newX =
            activeIndex * ITEM_SLOT_WIDTH +
            (ITEM_SLOT_WIDTH / 2 - ITEM_WIDTH / 2);
        translateX.value = withTiming(newX, {
            duration: 200,
            easing: Easing.inOut(Easing.quad),
        });
    }, [activeIndex]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

    return (
        <View className="absolute h-full w-full justify-end">
            <BlurView
                intensity={Platform.OS === 'ios' ? 30 : 80}
                experimentalBlurMethod="dimezisBlurView"
                style={{
                    backgroundColor:
                        Platform.OS === 'ios'
                            ? 'rgba(255, 255, 255, 0.9)'
                            : 'rgba(255, 252, 252, 0.3)',
                }}
                className={`flex-row justify-between items-center overflow-hidden mx-[16%] ${Platform.OS === 'ios' ? 'mb-[14%]' : 'mb-[9%]'} p-[2px] rounded-full`}
            >
                <Animated.View
                    style={animatedStyle}
                    className={`flex-row absolute bg-purple-200 rounded-full mx-1 h-[50px] w-[60px] justify-center items-center`}
                />

                {state.routes.map((route: any, index: number) => {
                    const isFocused = activeIndex === index;
                    const { options } = descriptors[route.key];
                    const badge = options.tabBarBadge;

                    // Ação de navegar
                    const onPress = () => {
                        // Só navega se não estiver focado
                        if (!isFocused) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        // 5. Cada ícone agora é um botão (Pressable)
                        <Pressable
                            key={route.key}
                            onPress={onPress}
                            className="flex-row h-[55px] w-[64px] justify-center items-center"
                        >
                            <GetIcon
                                routeName={route.name}
                                isFocused={isFocused}
                            />
                            {isFocused === true
                                ? undefined
                                : badge !== undefined && (
                                      <View
                                          className="absolute top-[8px]
                                           ml-8 bg-nubank w-[10px] h-[10px] rounded-full justify-center items-center"
                                      >
                                          <Text className="font-roboto text-nubank text-[1px]">
                                              {badge}
                                          </Text>
                                      </View>
                                  )}
                        </Pressable>
                    );
                })}
            </BlurView>
        </View>
    );
}
