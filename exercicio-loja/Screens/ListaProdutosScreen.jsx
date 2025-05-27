import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${encodeURIComponent(categoria)}`)
      .then(response => setProdutos(response.data.products))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, [categoria]);

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Cover source={{ uri: item.thumbnail }} />
          <Card.Content>
            <Title>{item.title}</Title>
            <Paragraph>{item.description}</Paragraph>
            <Paragraph style={styles.preco}>Preço: {item.price} USD</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
              Ver Detalhes
            </Button>
            <Button mode="contained" onPress={() => alert(`Você comprou: ${item.title}`)}>
              Comprar
            </Button>
          </Card.Actions>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
  },
  preco: {
    fontWeight: 'bold',
  },
});
