import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useGlobalContext } from '../../context/GlobalContext';
import { DondeEstoy } from '../../components/DondeEstoy';
import { Colors } from '../../constants/theme';

export default function CocinaAtendidos() {
  const { pedidosAtendidos } = useGlobalContext();
  const arr = pedidosAtendidos.aArray();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atendidos ({pedidosAtendidos.tamanio})</Text>
      <FlatList
        data={arr}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>Pedido: #{item.id}</Text>
            <Text>Total: ${item.total}</Text>
            <Text>Estado: {item.estado}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No hay pedidos atendidos</Text>}
      />
      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.light.background },
  title: { fontSize: 24, marginBottom: 10, fontWeight: 'bold', color: Colors.light.primaryDark },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#eee', backgroundColor: '#fff', borderRadius: 8, marginBottom: 8 },
  itemTitle: { fontWeight: 'bold', fontSize: 16 },
  empty: { textAlign: 'center', color: Colors.light.textSecondary, marginVertical: 20 },
});
