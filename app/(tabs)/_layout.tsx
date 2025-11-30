import CustomTabBar from '@/components/CustomTabBar';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabsLayout() {
    return (
        <>
            <SafeAreaView className='bg-nubank' edges={['top', ]} />
           
            <Tabs
                tabBar={(props) => <CustomTabBar {...props} />}
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="index"
            >
                <Tabs.Screen name="index" />
                <Tabs.Screen name="invest" />
                <Tabs.Screen name="shopping" />
                <Tabs.Screen
                    name="nucel"
                    options={{
                        tabBarBadge: 1,
                    }}
                />
            </Tabs>
        </>
    );
}
