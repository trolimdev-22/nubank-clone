import CustomTabBar from '@/components/customTabBar';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
    return (
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
            <Tabs.Screen name="nucell" />
        </Tabs>
    );
}
