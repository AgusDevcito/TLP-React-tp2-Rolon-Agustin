import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { DondeEstoy } from '../../components/DondeEstoy';
import { useGlobalContext } from '../../context/GlobalContext';
import { Colors } from '../../constants/theme';

export default function Perfil() {
  const { usuario, setUsuario, accionesCarrito } = useGlobalContext();
  const arr = accionesCarrito.aArray().filter(a => a.tipo === 'AGREGAR').map(a => a.plato);
  const total = arr.reduce((acc, p) => acc + p.precio, 0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{usuario ? '🧑‍🍳' : '👨‍🎓'}</Text>
      </View>

      <Text style={styles.name}>{usuario ? usuario : 'Alumno del IPF'}</Text>
      <Text style={styles.role}>
        {usuario ? 'Personal de cocina' : 'Compras como alumno'}
      </Text>

      {usuario ? (
        <View style={styles.stats}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Pedidos en espera</Text>
            <Text style={styles.statValue}>Ver en Cocina</Text>
          </View>
        </View>
      ) : (
        <View style={styles.stats}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Ítems en carrito</Text>
            <Text style={styles.statValue}>{accionesCarrito.tamanio}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Total actual</Text>
            <Text style={styles.statValue}>${total}</Text>
          </View>
        </View>
      )}

      {usuario ? (
        <>
          <Pressable style={styles.link} onPress={() => router.push('/cocina')}>
            <Ionicons name="flame" size={24} color={Colors.light.accent} />
            <Text style={styles.linkText}>Abrir Cocina</Text>
          </Pressable>

          <Pressable style={styles.logoutButton} onPress={() => setUsuario(null)}>
            <Ionicons name="log-out" size={24} color="#fff" />
            <Text style={styles.logoutText}>Cerrar sesión</Text>
          </Pressable>
        </>
      ) : (
        <View style={styles.loginCard}>
          <Text style={styles.loginTitle}>¿Sos de la cocina?</Text>
          <Text style={styles.loginDesc}>
            Iniciá sesión para atender los pedidos en orden de llegada.
          </Text>
          <Pressable style={styles.link} onPress={() => router.push('/login')}>
            <Ionicons name="log-in" size={24} color={Colors.light.accent} />
            <Text style={styles.linkText}>Ingresar a Cocina</Text>
          </Pressable>
        </View>
      )}

      <DondeEstoy />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
    backgroundColor: Colors.light.background,
    minHeight: '100%',
  },
  avatar: {
    alignSelf: 'center',
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
    backgroundColor: Colors.light.backgroundSelected,
    marginTop: 20,
  },
  avatarText: {
    fontSize: 45,
  },
  name: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light.primaryDark,
  },
  role: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.light.textSecondary,
    marginTop: -10,
  },
  stats: {
    flexDirection: 'row',
    gap: 15,
  },
  statBox: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    marginBottom: 5,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.accent,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.light.accentLight,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.accent,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#f44336', // Red for logout
    marginTop: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  loginCard: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: Colors.light.backgroundElement,
    marginTop: 15,
  },
  loginTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 5,
  },
  loginDesc: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    marginBottom: 15,
  }
});
