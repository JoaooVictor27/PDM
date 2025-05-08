import { StyleSheet, View, FlatList } from 'react-native';
import { Card, Text } from 'react-native-paper';
import React from 'react';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022]
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024]
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025]
  },
];

export default function TitulosScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={titulos}
        contentContainerStyle={{ padding: 16 }}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.titulo}>{item.nome}</Text>
              <Text style={styles.anos}>{item.anos.join(', ')}</Text>
            </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    elevation: 4,
  },
  cardContent: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginBottom: 8,
    textAlign: 'center',
  },
  anos: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
  },
});