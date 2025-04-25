// screens/ReceitaScreen.jsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

const ReceitaScreen = ({ route }) => {
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: receita.imagem }} />
        <Card.Content>
          <Title style={styles.title}>{receita.nome}</Title>
          <Paragraph>⏱ Tempo: {receita.tempoPreparo}</Paragraph>
          <Paragraph>🍽 Porções: {receita.porcoes}</Paragraph>

          <Text style={styles.section}>🧂 Ingredientes:</Text>
          {receita.ingredientes.map((item, index) => (
            <Text key={index}>• {item}</Text>
          ))}

          <Text style={styles.section}>👩‍🍳 Modo de Preparo:</Text>
          {receita.modoPreparo.map((passo, index) => (
            <Text key={index}>{passo}</Text>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff8f1',
  },
  card: {
    borderRadius: 12,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  section: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReceitaScreen;


