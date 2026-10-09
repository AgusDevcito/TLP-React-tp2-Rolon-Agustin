import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { router } from 'expo-router';
import { useGlobalContext } from '../../../context/GlobalContext';
import { DondeEstoy } from '../../../components/DondeEstoy';
import { Colors } from '../../../constants/theme';

export default function CarritoScreen() {
  const { accionesCarrito, deshacerAccionCarrito } = useGlobalContext();
  const arr = accionesCarrito.aArray().filter(a => a.tipo === 'AGREGAR').map(a => a.plato);
  const total = arr.reduce((acc, p) => acc + p.precio, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Carrito ({arr.length} platos)</Text>
      <FlatList
        data={arr}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.nombre}</Text>
            <Text style={styles.itemPrice}>${item.precio}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Tu carrito está vacío</Text>}
      />
      <Text style={styles.total}>Total: ${total}</Text>
      <View style={styles.actions}>
        <Pressable style={[styles.button, { backgroundColor: Colors.light.primaryDark }]} onPress={deshacerAccionCarrito}>
          <Text style={styles.buttonText}>Deshacer</Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: Colors.light.accent }]} onPress={() => router.push('/carrito/nota')}>
          <Text style={styles.buttonText}>Proceder</Text>
        </Pressable>
      </View>
      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.light.background },
  title: { fontSize: 24, marginBottom: 10, fontWeight: 'bold', color: Colors.light.primaryDark },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  itemName: { fontSize: 16 },
  itemPrice: { fontSize: 16, fontWeight: 'bold' },
  total: { fontSize: 20, fontWeight: 'bold', marginVertical: 15, color: Colors.light.accent },
  empty: { textAlign: 'center', color: Colors.light.textSecondary, marginVertical: 20 },
  actions: { flexDirection: 'row', gap: 10 },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
