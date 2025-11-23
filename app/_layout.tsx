import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { ThemeProvider as RNEThemeProvider, createTheme } from '@rneui/themed';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

const rneTheme = createTheme({
  lightColors: {
    primary: '#2089dc',
  },
  darkColors: {
    primary: '#4d9de0',
  },
  mode: 'light',
});

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <RNEThemeProvider theme={rneTheme}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          </Stack>
          <StatusBar style="auto" />
        </>
      </ThemeProvider>
    </RNEThemeProvider>
  );
}
