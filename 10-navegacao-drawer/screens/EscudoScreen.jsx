import { StyleSheet, View, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import React from 'react';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.content}>
          <Image
            source={{ uri: time.escudo }}
            style={styles.escudo}
            resizeMode="contain"
          />
          <Text style={styles.nome}>{time.nome}</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 24,
    elevation: 6,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  escudo: {
    width: 220,
    height: 220,
    marginBottom: 16,
    borderRadius: 12,
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f1f5f9',
    textAlign: 'center',
  },
});
  