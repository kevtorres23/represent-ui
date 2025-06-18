import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import 'react-native-reanimated';
import '../../global.css';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    FugazOne: require('../../assets/fonts/FugazOne-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Drawer
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: 'black',
        headerTitleStyle: { fontFamily: 'FugazOne' },
        headerTitle: "REPRESENT",
        drawerIcon: ({ color }) => {
          if (route.name === 'fw19') {
            return <Ionicons name="shirt" size={20} color={color} />;
          }
          if (route.name === 'index') {
            return <Ionicons name="home" size={20} color={color} />;
          }
          if (route.name === 'terriers') {
            return <Ionicons name="footsteps" size={20} color={color} />;
          }
        },
        headerLeft: () => {
          const navigation = useNavigation();
          return (
            <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={{ marginLeft: 16 }}>
              <Ionicons name="menu" size={24} color="black" />
            </Pressable>
          );
        },
        headerRight: () => {
          if (route.name === 'fw19') {
            return <Ionicons name="grid-outline" size={24} color="black" style={{ marginRight: 16 }} />;
          }
          if (route.name === 'terriers') {
            return <Ionicons name="heart-outline" size={24} color="black" style={{ marginRight: 16 }} />;
          }
          return null;
        },
      })}
    />
  );
}
