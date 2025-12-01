import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface BalanceStore {
    isBalanceVisible: boolean;
    toggleVisible: () => void;
}

export const useBalanceStore = create<BalanceStore>()(
    persist(
        (set) => ({
            isBalanceVisible: true,
            toggleVisible: () =>
                set((state) => ({ isBalanceVisible: !state.isBalanceVisible })),
        }),
        {
            name: 'balance-storage', // Nome unico para salvar no celular.
            storage: createJSONStorage(() => AsyncStorage), // usa o AsyncStorage para armazenar os dados,
        }
    )
);
