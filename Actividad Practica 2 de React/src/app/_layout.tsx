import { Stack } from 'expo-router';
import { GlobalProvider } from '../context/GlobalContext';

function RootStack() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="buscar" options={{ title: 'Buscar Platos' }} />
      <Stack.Screen name="confirmar" options={{ title: 'Confirmar Pedido', presentation: 'modal' }} />
      <Stack.Screen name="ayuda" options={{ title: 'Ayuda' }} />
      <Stack.Screen name="categorias/[categoria]" options={{ title: 'Categoría' }} />
      <Stack.Screen name="turno/[numero]" options={{ title: 'Tu Turno', headerBackVisible: false }} />
      <Stack.Screen name="pedido" options={{ title: 'Pedido' }} />
      <Stack.Screen name="+not-found" options={{ title: 'No encontrado' }} />
      <Stack.Screen name="login" options={{ title: 'Iniciar Sesión', presentation: 'modal' }} />
      <Stack.Screen name="cocina" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <GlobalProvider>
      <RootStack />
    </GlobalProvider>
  );
}
