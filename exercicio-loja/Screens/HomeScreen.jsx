import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Text } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories') // <- SUBSTITUA pela URL correta
      .then(response => {
        const categoriasFormatadas = response.data.map(categoria => ({
          name: categoria,
          slug: categoria,
        }));
        setCategorias(categoriasFormatadas);
        setCarregando(false);
      })
      .catch(error => {
        console.error('Erro ao buscar categorias:', error);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return (
      <View style={styles.centered}>
        <Text>Carregando categorias...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={categorias}
      keyExtractor={(item) => item.slug}
      renderItem={({ item }) => (
        <List.Item
          title={item.name}
          onPress={() => navigation.navigate('Produtos', { categoria: item.slug })}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 16,
  },
});
