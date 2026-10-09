import { View, Text, TextInput, StyleSheet, FlatList, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { platos } from '../data/platos';
import { DondeEstoy } from '../components/DondeEstoy';
import { Colors } from '../constants/theme';

export default function BuscarScreen() {
  const { q = '', categoria = '' } = useLocalSearchParams();

  const handleSearch = (text: string) => {
    router.setParams({ q: text, categoria: categoria as string });
  };

  const handleCategory = (cat: string) => {
    router.setParams({ q: q as string, categoria: cat });
  };

  const resultados = platos.filter((p) => {
    const matchText = p.nombre.toLowerCase().includes((q as string).toLowerCase());
    const matchCat = categoria ? p.categoria === categoria : true;
    return matchText && matchCat;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Platos</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Buscar por nombre..." 
        value={q as string}
        onChangeText={handleSearch}
      />
      
      <View style={styles.filtros}>
        <Pressable onPress={() => handleCategory('')} style={[styles.badge, !categoria && styles.badgeActivo]}>
          <Text style={styles.badgeText}>Todos</Text>
        </Pressable>
        {['desayuno', 'almuerzo', 'bebidas', 'kiosco'].map((cat) => (
          <Pressable key={cat} onPress={() => handleCategory(cat)} style={[styles.badge, categoria === cat && styles.badgeActivo]}>
            <Text style={styles.badgeText}>{cat}</Text>
          </Pressable>
        ))}
      </View>

      <FlatList 
        data={resultados}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemNombre}>{item.nombre}</Text>
            <Text>{item.categoria} - ${item.precio}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No se encontraron platos.</Text>}
      />

      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { flex: 1, padding: 20, backgroundColor: Colors.light.background }, 
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: Colors.light.primaryDark },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  filtros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 15,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#e0e0e0',
  },
  badgeActivo: {
    backgroundColor: Colors.light.primary,
  },
  badgeText: {
    color: '#333',
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemNombre: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});
