import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Pressable, View } from 'react-native';
import { BlurView } from 'expo-blur';

const GetIcon = ({ routeName, isFocused }: { routeName: string, isFocused: boolean }) => {
    if (routeName === 'index') {
        return (
            <View className="flex-row justify-center items-center">
                <Ionicons name="arrow-down" size={20} color="#8308d1" />

                <Ionicons name="arrow-up" size={20} color="#8308d1" />
            </View>
        );
    }
    if (routeName === 'invest') {
        return <FontAwesome6 name="dollar" size={26} color="#8308d1" />;
    }
    if (routeName === 'shopping') {
        return (
            <MaterialCommunityIcons
                name="shopping-outline"
                size={26}
                color="#8308d1"
            />
        );
    }

    if (routeName === 'nucell') {
        return <AntDesign name="mobile" size={26} color="#8308d1" />;
    }
};
export default function CustomTabBar({ state, navigation }: any) {
    const activeIndex = state.index;
    return (
        <View className="absolute h-full w-full justify-end">
            <BlurView
                intensity={80}
                experimentalBlurMethod="dimezisBlurView"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                className="flex-row justify-center items-center overflow-hidden mx-[17%] mb-[9%] p-[2px] px-2 rounded-full"
            >
                {state.routes.map((route: any, index: number) => {
                    const isFocused = activeIndex === index;                    
                    // Ação de navegar
                    const onPress = () => {
                        // Só navega se não estiver focado
                        if (!isFocused) {
                            navigation.navigate(route.name);
                        }
                    };

                    // O 'Wrapper' (fundo roxo ou transparente)
                    const WrapperView = isFocused
                        ? (props: any) => (
                              <View
                                  className="flex-row bg-purple-200 rounded-full h-[50px] w-[60px] justify-center items-center"
                                  {...props}
                              />
                          )
                        : (props: any) => (
                              <View
                                  className="flex-row h-[60px] w-[60px] justify-center items-center"
                                  {...props}
                              />
                          );

                    return (
                        // 5. Cada ícone agora é um botão (Pressable)
                        <Pressable key={route.key} onPress={onPress}>
                            <WrapperView>
                                <GetIcon
                                    routeName={route.name}
                                    isFocused={isFocused}
                                />
                            </WrapperView>
                        </Pressable>
                    );
                })}
            </BlurView>
        </View>
    );
}
