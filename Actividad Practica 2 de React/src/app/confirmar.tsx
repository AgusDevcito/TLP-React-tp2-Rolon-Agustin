import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useGlobalContext } from '../context/GlobalContext';
import { DondeEstoy } from '../components/DondeEstoy';
import { Colors } from '../constants/theme';

export default function ConfirmarScreen() {
  const { nota } = useLocalSearchParams();
  const { crearPedido } = useGlobalContext();

  const handleConfirmar = () => {
    const id = crearPedido((nota as string) || '');
    router.replace(`/turno/${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmar Pedido</Text>
      <Text style={styles.label}>Nota para cocina:</Text>
      <Text style={styles.nota}>{nota || 'Sin nota'}</Text>
      <Pressable style={styles.button} onPress={handleConfirmar}>
        <Text style={styles.buttonText}>Confirmar y Enviar</Text>
      </Pressable>
      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.light.background },
  title: { fontSize: 24, marginBottom: 10, fontWeight: 'bold', color: Colors.light.primaryDark },
  label: { fontSize: 16, color: Colors.light.textSecondary, marginTop: 10 },
  nota: { fontSize: 18, marginVertical: 10, color: Colors.light.text },
  button: {
    backgroundColor: Colors.light.accent,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
