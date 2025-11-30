import React from 'react';
import { Image, Pressable } from 'react-native';

export function ProfileIcon() {
    return (
        <Pressable className="size-16 bg-white/40 rounded-full justify-center items-center">
            <Image
                className="size-16 rounded-full"
                source={require('../assets/images/profile/WhatsApp Image 2025-11-05 at 00.41.55_bc6fe4e1.jpg')}
            />
        </Pressable>
    );
}
