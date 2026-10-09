import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/theme';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.light.primary, headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Inicio', tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} /> }} />
      <Tabs.Screen name="menu" options={{ title: 'Menú', tabBarIcon: ({color}) => <Ionicons name="restaurant" size={24} color={color} /> }} />
      <Tabs.Screen name="carrito" options={{ title: 'Carrito', tabBarIcon: ({color}) => <Ionicons name="cart" size={24} color={color} /> }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil', tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color} /> }} />
    </Tabs>
  );
}
