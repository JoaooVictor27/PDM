import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

const gerarDezenas = () => {
  const dezenas = new Set();
  while (dezenas.size < 6) {
    dezenas.add(Math.floor(Math.random() * 60) + 1);
  }
  return Array.from(dezenas).sort((a, b) => a - b);
};

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const novoJogo = gerarDezenas();
    setJogoGerado(novoJogo);
    setJogosMegaSena([novoJogo, ...jogosMegaSena]);
  };

  const renderItem = ({ item, index }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="bodyMedium">Jogo #{jogosMegaSena.length - index}:</Text>
        <Text>{item.join(' - ')}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={gerarJogo}>
        Gerar Jogo da Mega-Sena
      </Button>

      {jogoGerado.length > 0 && (
        <Text variant="titleMedium" style={styles.jogoAtual}>
          Jogo Atual: {jogoGerado.join(' - ')}
        </Text>
      )}

      <FlatList
        data={jogosMegaSena}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          jogosMegaSena.length > 0 && (
            <Text variant="titleSmall" style={styles.historicoTitulo}>
              Histórico de Jogos
            </Text>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  jogoAtual: {
    marginTop: 16,
    fontWeight: 'bold',
  },
  historicoTitulo: {
    marginTop: 24,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 8,
  },
});