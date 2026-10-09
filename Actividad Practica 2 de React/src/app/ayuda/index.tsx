import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { DondeEstoy } from '../../components/DondeEstoy';
import { Colors } from '../../constants/theme';

export default function AyudaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sección de Ayuda</Text>
      <Pressable style={styles.link} onPress={() => router.push('/ayuda/pagos')}>
        <Text style={styles.linkText}>💳 Pagos</Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => router.push('/ayuda/horarios')}>
        <Text style={styles.linkText}>🕐 Horarios</Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => router.push('/ayuda/pagos/tarjeta')}>
        <Text style={styles.linkText}>💳 Pagos con Tarjeta</Text>
      </Pressable>
      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.light.background },
  title: { fontSize: 24, marginBottom: 15, fontWeight: 'bold', color: Colors.light.primaryDark },
  link: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  linkText: { fontSize: 16, color: Colors.light.text },
});
