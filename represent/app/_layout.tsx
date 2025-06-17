import { DarkTheme, DefaultTheme, DrawerActions, ThemeProvider } from '@react-navigation/native';
import { getHeaderTitle, Header } from '@react-navigation/elements';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import 'react-native-reanimated';
import '../global.css';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TouchableOpacity, Button, Pressable } from 'react-native';
import { useNavigation } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';

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
            drawerIcon: ({ color, size }) => <Ionicons name="home" size={20} color={color} />,
            header: ({ route, options }) => {
              const title = getHeaderTitle(options, route.name);
              const navigation = useNavigation();

              return <Header
                title={title}
                headerTitleAlign="center"
                headerTitleStyle={{ fontFamily: "FugazOne" }}
                headerLeft={() => (
                  <Ionicons onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} name='menu' size={20} color="#000" className="ml-5" />
                )}
                headerRight={() => (
                  <Ionicons name='search' size={20} color="#000" className='mr-5' />
                )}
              />
            },
          }} />
          <Drawer.Screen name="fw19" options={{
            drawerLabel: 'FW19',
            title: 'FW19',
            drawerActiveTintColor: 'white',
            drawerActiveBackgroundColor: 'black',
            drawerIcon: ({ color, size }) => <Ionicons name="shirt" size={20} color={color} />,
            header: ({ route, options }) => {
              const title = getHeaderTitle(options, route.name);
              const navigation = useNavigation();

              return <Header
                title={title}
                headerTitleAlign="center"
                headerTitleStyle={{ fontFamily: "FugazOne" }}
                headerLeft={() => (
                  <Ionicons onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} name='arrow-back-outline' size={20} color="#000" className="ml-5" />
                )}
                headerRight={() => (
                  <Ionicons name='grid-outline' size={20} color="#000" className='mr-5' />
                )}
              />
            },
          }} />
          <Drawer.Screen name="terriers" options={{
            drawerLabel: 'Terriers',
            title: 'REPRESENT',
            drawerActiveTintColor: 'white',
            drawerActiveBackgroundColor: 'black',
            drawerIcon: ({ color, size }) => <Ionicons name="footsteps" size={20} color={color} />,
            header: ({ route, options }) => {
              const title = getHeaderTitle(options, route.name);
              const navigation = useNavigation();

              return <Header
                title={title}
                headerTitleAlign="center"
                headerTitleStyle={{ fontFamily: "FugazOne" }}
                headerLeft={() => (
                  <Ionicons onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} name='arrow-back-outline' size={20} color="#000" className="ml-5" />
                )}
                headerRight={() => (
                  <Ionicons name='heart-outline' size={20} color="#000" className='mr-5' />
                )}
              />
            },
          }} />
        </Drawer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
