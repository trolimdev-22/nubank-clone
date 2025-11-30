import EvilIcons from '@expo/vector-icons/EvilIcons';
import { router, Stack } from 'expo-router';
import React from 'react';
export default function Layout() {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="login-bio"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="login-app"
                    options={{
                        headerTitle: '',
                        presentation: 'containedModal',
                        headerLeft: () => (
                            <EvilIcons
                                name="chevron-left"
                                size={40}
                                color="black"
                                className="right-1"
                                onPress={() => router.replace('/welcome')}
                            />
                        ),
                        headerShadowVisible: false,
                        headerStyle: {
                            backgroundColor: '#e5e7eb',
                        },
                    }}
                />
                <Stack.Screen
                    name="login-password"
                    options={{
                        headerTitle: '',
                        presentation: 'modal',
                        headerLeft: () => (
                            <EvilIcons
                                name="chevron-left"
                                size={40}
                                color="black"
                                className="right-1"
                                onPress={() => router.replace('/login-app')}
                            />
                        ),
                        headerShadowVisible: false,
                        headerStyle: {
                            backgroundColor: '#e5e7eb',
                        },
                    }}
                />
            </Stack>
        </>
    );
}
