import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import 'react-native-reanimated';
import '../global.css';
import { Ionicons } from '@expo/vector-icons';

import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    FugazOne: require('../assets/fonts/FugazOne-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen name="index" options={{
            drawerLabel: 'Home',
            title: 'REPRESENT',
            drawerActiveTintColor: 'white',
            drawerActiveBackgroundColor: 'black',
            drawerIcon: ({ color, size }) => <Ionicons name="home" size={20} color={color} />
          }} />
          <Drawer.Screen name="fw19" options={{
            drawerLabel: 'FW19',
            title: 'REPRESENT',
            drawerActiveTintColor: 'white',
            drawerActiveBackgroundColor: 'black',
            drawerIcon: ({ color, size }) => <Ionicons name="shirt" size={20} color={color} />
          }} />
          <Drawer.Screen name="terriers" options={{
            drawerLabel: 'Terriers',
            title: 'REPRESENT',
            drawerActiveTintColor: 'white',
            drawerActiveBackgroundColor: 'black',
            drawerIcon: ({ color, size }) => <Ionicons name="footsteps" size={20} color={color} />
          }} />
        </Drawer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
