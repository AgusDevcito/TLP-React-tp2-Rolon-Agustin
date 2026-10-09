import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { usePathname, useSegments, useLocalSearchParams } from 'expo-router';

export function DondeEstoy() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const segments = useSegments();
  const params = useLocalSearchParams();

  if (!expanded) {
    return (
      <Pressable style={styles.floatingButton} onPress={() => setExpanded(true)}>
        <Text style={styles.iconText}>📍</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.floatingCard}>
      <View style={styles.header}>
        <Text style={styles.title}>📍 ¿Dónde estoy?</Text>
        <Pressable onPress={() => setExpanded(false)} style={styles.closeBtn}>
          <Text style={styles.closeText}>❌</Text>
        </Pressable>
      </View>
      <Text style={styles.text}>Pathname: {pathname}</Text>
      <Text style={styles.text}>Segments: {JSON.stringify(segments)}</Text>
      <Text style={styles.text}>Params: {JSON.stringify(params)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 9999,
    borderWidth: 1,
    borderColor: '#eee',
  },
  iconText: {
    fontSize: 24,
  },
  floatingCard: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 9999,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  closeBtn: {
    padding: 5,
  },
  closeText: {
    fontSize: 14,
  },
  text: {
    fontSize: 13,
    color: '#333',
    marginVertical: 2,
  }
});
