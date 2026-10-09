import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { DondeEstoy } from '../../components/DondeEstoy';
import { Colors } from '../../constants/theme';

export default function TurnoScreen() {
  const { numero } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎫</Text>
      <Text style={styles.title}>Tu turno es el: {numero}</Text>
      <Pressable style={styles.button} onPress={() => router.dismissAll()}>
        <Text style={styles.buttonText}>Volver al Inicio</Text>
      </Pressable>
      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.light.background },
  emoji: { fontSize: 60, marginBottom: 10 },
  title: { fontSize: 32, marginBottom: 20, fontWeight: 'bold', color: Colors.light.primaryDark },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
