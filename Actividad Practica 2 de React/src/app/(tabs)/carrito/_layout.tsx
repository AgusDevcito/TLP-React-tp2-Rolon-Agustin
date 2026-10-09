import { Stack } from 'expo-router';

export default function CarritoLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Carrito' }} />
      <Stack.Screen name="nota" options={{ title: 'Nota para Cocina', presentation: 'formSheet', sheetAllowedDetents: [0.5, 0.9] }} />
    </Stack>
  );
}
