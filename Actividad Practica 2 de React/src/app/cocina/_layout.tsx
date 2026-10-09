import { Drawer } from 'expo-router/drawer';
import { Redirect } from 'expo-router';
import { useGlobalContext } from '../../context/GlobalContext';

export default function CocinaLayout() {
  const { usuario } = useGlobalContext();

  if (!usuario) {
    return <Redirect href="/login" />;
  }

  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ drawerLabel: 'Pendientes', title: 'Pedidos Pendientes' }} />
      <Drawer.Screen name="atendidos" options={{ drawerLabel: 'Atendidos', title: 'Pedidos Atendidos' }} />
    </Drawer>
  );
}
