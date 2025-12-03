import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { ThemeProvider as RNEThemeProvider, createTheme } from '@rneui/themed';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';


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
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="components/button" options={{ headerShown: true, title: 'Button' }} />
            <Stack.Screen name="components/avatar" options={{ headerShown: true, title: 'Avatar' }} />
            <Stack.Screen name="components/badge" options={{ headerShown: true, title: 'Badge' }} />
            <Stack.Screen name="components/card" options={{ headerShown: true, title: 'Card' }} />
            <Stack.Screen name="components/chip" options={{ headerShown: true, title: 'Chip' }} />
            <Stack.Screen name="components/divider" options={{ headerShown: true, title: 'Divider' }} />
            <Stack.Screen name="components/input" options={{ headerShown: true, title: 'Input' }} />
            <Stack.Screen name="components/rating" options={{ headerShown: true, title: 'Rating' }} />
            <Stack.Screen name="components/text" options={{ headerShown: true, title: 'Text' }} />
            <Stack.Screen name="components/icon" options={{ headerShown: true, title: 'Icon' }} />
          </Stack>
          <StatusBar style="auto" />
        </>
      </ThemeProvider>
    </RNEThemeProvider>
  );
}
