import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { DondeEstoy } from '../../components/DondeEstoy';
import { Colors } from '../../constants/theme';

export default function AyudaSlugScreen() {
  const { slug } = useLocalSearchParams();
  const pathArray = Array.isArray(slug) ? slug : [slug];
  const mainTopic = pathArray[0];
  const subTopic = pathArray[1];

  let titulo = 'Ayuda';
  let contenido = '';
  let icono = '❔';

  if (mainTopic === 'pagos') {
    if (subTopic === 'tarjeta') {
      titulo = 'Pagos con Tarjeta';
      icono = '💳';
      contenido = 'Aceptamos tarjetas de crédito y débito (Visa, Mastercard, Cabal).\n\n• Sin recargo pagando con tarjeta de débito.\n• Tarjetas de crédito en 1 pago sin interés.\n• Financiación en 3 cuotas con un 10% de recargo.';
    } else {
      titulo = 'Métodos de Pago';
      icono = '💵';
      contenido = 'Podés abonar tus pedidos de las siguientes maneras:\n\n• Efectivo al retirar por caja.\n• Transferencia bancaria (Alias: comedor.ipf).\n• Escaneando el código QR de MercadoPago disponible en el mostrador del comedor.';
    }
  } else if (mainTopic === 'horarios') {
    titulo = 'Horarios de Atención';
    icono = '🕐';
    contenido = 'El Comedor IPF está abierto de Lunes a Viernes con los siguientes horarios:\n\n🥐 Desayuno: 08:30 a 09:00 hs.\n🍲 Almuerzo: 13:00 a 14:00 hs.';
  } else {
    titulo = 'Información no disponible';
    contenido = 'No tenemos información detallada para esta sección de ayuda en este momento.';
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{icono} {titulo}</Text>
        <Text style={styles.content}>{contenido}</Text>
      </View>
      <Text style={styles.path}>Ruta técnica: /{pathArray.join('/')}</Text>
      <DondeEstoy />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.light.background },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: { fontSize: 24, marginBottom: 15, fontWeight: 'bold', color: Colors.light.primaryDark },
  content: { fontSize: 16, color: Colors.light.text, lineHeight: 26 },
  path: { fontSize: 13, color: Colors.light.textSecondary, fontStyle: 'italic', marginBottom: 20, textAlign: 'center' },
});
