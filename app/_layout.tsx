import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
        'Roboto-Thin': require('../assets/fonts/Roboto-Thin.ttf'),
        'Roboto-SemiBold': require('../assets/fonts/Roboto-SemiBold.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) return null;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <SafeAreaProvider>
                    <SafeAreaView className="bg-nubank" edges={['top']} />

                    <Stack
                        screenOptions={{
                            headerShown: false,
                            statusBarStyle: 'light',
                        }}
                    >
                        <Stack.Screen name="(tabs)" />
                        {/* <Stack.Screen name="menu" />
                        <Stack.Screen
                            name="modal-teste"
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="modal-test"
                            options={{ headerShown: false }}
                        /> */}
                    </Stack>
                </SafeAreaProvider>
                <StatusBar style="light" />
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}
