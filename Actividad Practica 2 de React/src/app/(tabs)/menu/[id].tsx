import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { platos } from '../../../data/platos';
import { useGlobalContext } from '../../../context/GlobalContext';
import { DondeEstoy } from '../../../components/DondeEstoy';
import { Colors } from '../../../constants/theme';

export default function PlatoDetalle() {
  const { id } = useLocalSearchParams();
  const { agregarAlCarrito } = useGlobalContext();
  const plato = platos.find(p => p.id === id);

  if (!plato) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Plato no encontrado (id: {id})</Text>
        <DondeEstoy />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{plato.nombre}</Text>
      <Text style={styles.desc}>{plato.descripcion}</Text>
      <Text style={styles.cat}>Categoría: {plato.categoria}</Text>
      <Text style={styles.price}>Precio: ${plato.precio}</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          agregarAlCarrito(plato);
          router.navigate('/carrito');
        }}
      >
        <Text style={styles.buttonText}>Agregar al Carrito</Text>
      </Pressable>
      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.light.background },
  title: { fontSize: 24, fontWeight: 'bold', color: Colors.light.primaryDark },
  desc: { fontSize: 16, color: Colors.light.textSecondary, marginVertical: 10 },
  cat: { fontSize: 14, color: Colors.light.textSecondary },
  price: { fontSize: 20, fontWeight: 'bold', color: Colors.light.accent, marginVertical: 15 },
  error: { fontSize: 18, color: '#f44336', textAlign: 'center', marginTop: 40 },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
