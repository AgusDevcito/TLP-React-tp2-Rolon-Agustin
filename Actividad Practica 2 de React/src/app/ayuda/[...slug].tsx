import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { DondeEstoy } from '../../components/DondeEstoy';
import { Colors } from '../../constants/theme';

export default function AyudaSlugScreen() {
  const { slug } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle de Ayuda</Text>
      <Text style={styles.path}>Ruta: /{Array.isArray(slug) ? slug.join('/') : slug}</Text>
      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.light.background },
  title: { fontSize: 24, marginBottom: 10, fontWeight: 'bold', color: Colors.light.primaryDark },
  path: { fontSize: 16, color: Colors.light.textSecondary },
});
