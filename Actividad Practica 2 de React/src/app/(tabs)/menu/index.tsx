import { View, StyleSheet, FlatList } from 'react-native';
import { router } from 'expo-router';
import { platos } from '../../../data/platos';
import Card from '../../../components/Card';
import { DondeEstoy } from '../../../components/DondeEstoy';
import { Colors } from '../../../constants/theme';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={platos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.nombre}
            description={item.descripcion}
            price={item.precio}
            image={item.imagen}
            onPress={() => router.push(`/menu/${item.id}`)}
          />
        )}
        ListFooterComponent={<DondeEstoy />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: Colors.light.background },
});
