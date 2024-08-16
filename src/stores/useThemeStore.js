import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useThemeStore = create(
  persist(
    set => ({
      theme: 'dark',
      toggleTheme: mode =>
        set(state => {
          return {theme: mode === 'dark' ? 'light' : 'dark'};
        }),
    }),
    {name: 'theme-storage', storage: createJSONStorage(() => AsyncStorage)},
  ),
);

export default useThemeStore;
