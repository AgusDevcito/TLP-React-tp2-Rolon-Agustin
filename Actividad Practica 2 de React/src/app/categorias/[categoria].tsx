import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { platos } from '../../data/platos';
import { DondeEstoy } from '../../components/DondeEstoy';
import { Colors } from '../../constants/theme';

export default function CategoriaScreen() {
  const { categoria } = useLocalSearchParams();
  const platosCategoria = platos.filter(p => p.categoria === categoria);

  if (platosCategoria.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Categoría: {categoria}</Text>
        <Text style={styles.error}>La categoría {`"${categoria}"`} no existe o no tiene platos disponibles.</Text>
        <DondeEstoy />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categoría: {categoria}</Text>
      <FlatList
        data={platosCategoria}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text style={styles.item}>{item.nombre} - ${item.precio}</Text>}
      />
      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.light.background },
  title: { fontSize: 24, marginBottom: 10, fontWeight: 'bold', color: Colors.light.primaryDark },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#eee' },
  error: { fontSize: 16, color: '#f44336', marginTop: 20, textAlign: 'center' },
});
