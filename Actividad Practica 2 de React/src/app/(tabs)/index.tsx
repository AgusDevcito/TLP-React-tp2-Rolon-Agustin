import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useGlobalContext } from '../../context/GlobalContext';
import { Colors } from '../../constants/theme';
import { DondeEstoy } from '../../components/DondeEstoy';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const { usuario } = useGlobalContext();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../../../assets/images/banner.png')} 
        style={styles.banner} 
        resizeMode="cover" 
      />
      
      <View style={styles.content}>
        {usuario ? (
          <View style={styles.profileBanner}>
            <Text style={styles.profileText}>👋 Bienvenido, {usuario}</Text>
          </View>
        ) : null}
        
        <Text style={styles.title}>Comedor IPF</Text>
        <Text style={styles.subtitle}>¿Qué te gustaría hacer hoy?</Text>
        
        <View style={styles.grid}>
          <Pressable style={[styles.card, { backgroundColor: Colors.light.primary }]} onPress={() => router.push('/menu')}>
            <Ionicons name="restaurant" size={32} color="#fff" />
            <Text style={styles.cardText}>Menú</Text>
          </Pressable>
          
          <Pressable style={[styles.card, { backgroundColor: Colors.light.primaryDark }]} onPress={() => router.push('/buscar')}>
            <Ionicons name="search" size={32} color="#fff" />
            <Text style={styles.cardText}>Buscar</Text>
          </Pressable>
          
          <Pressable style={[styles.card, { backgroundColor: Colors.light.accent }]} onPress={() => router.push('/ayuda')}>
            <Ionicons name="help-circle" size={32} color="#fff" />
            <Text style={styles.cardText}>Ayuda</Text>
          </Pressable>
          
          <Pressable style={[styles.card, { backgroundColor: Colors.light.accentLight }]} onPress={() => router.push('/cocina')}>
            <Ionicons name="flame" size={32} color="#fff" />
            <Text style={styles.cardText}>Cocina</Text>
          </Pressable>
        </View>

        {!usuario && (
          <Pressable style={styles.loginButton} onPress={() => router.push('/login')}>
            <Text style={styles.loginButtonText}>Iniciar Sesión como Cocina</Text>
          </Pressable>
        )}
      </View>
      <View style={{ padding: 20 }}>
        <DondeEstoy />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: Colors.light.background },
  banner: { width: '100%', height: 200 },
  content: { padding: 20, alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: Colors.light.primaryDark, marginTop: 10 },
  subtitle: { fontSize: 16, color: Colors.light.textSecondary, marginBottom: 20 },
  profileBanner: {
    backgroundColor: Colors.light.accentLight,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  profileText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  card: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  loginButton: {
    marginTop: 20,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.light.primaryDark,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: { color: Colors.light.primaryDark, fontSize: 16, fontWeight: 'bold' },
});
