import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { DondeEstoy } from '../../../components/DondeEstoy';
import { Colors } from '../../../constants/theme';

export default function NotaScreen() {
  const [nota, setNota] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nota para Cocina</Text>
      <TextInput
        style={styles.input}
        value={nota}
        onChangeText={setNota}
        placeholder="Ej: Sin sal, bien cocido..."
        multiline
        numberOfLines={4}
      />
      <Pressable
        style={styles.button}
        onPress={() => router.push({ pathname: '/confirmar', params: { nota } })}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </Pressable>
      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.light.background },
  title: { fontSize: 24, marginBottom: 15, fontWeight: 'bold', color: Colors.light.primaryDark },
  input: {
    borderWidth: 1,
    borderColor: Colors.light.primary,
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.light.accent,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
