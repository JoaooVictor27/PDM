import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Text, Button } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { id } = route.params;
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => {
        setProduto(response.data);
        setCarregando(false);
      })
      .catch(error => {
        console.error('Erro ao buscar produto:', error);
        setCarregando(false);
      });
  }, [id]);

  if (carregando) return <Text style={styles.loading}>Carregando...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: produto.thumbnail || 'https://via.placeholder.com/150' }} />
        <Card.Content>
          <Title>{produto.title}</Title>
          <Paragraph>{produto.description}</Paragraph>
          <Paragraph style={styles.price}>💲 Preço: {produto.price} USD</Paragraph>
          <Paragraph>🏷 Marca: {produto.brand}</Paragraph>
          <Paragraph>📂 Categoria: {produto.category}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => alert('Produto adicionado ao carrinho!')}>
            Adicionar ao carrinho
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  loading: {
    padding: 16,
    textAlign: 'center',
  },
  price: {
    marginTop: 8,
    fontWeight: 'bold',
  },
});
