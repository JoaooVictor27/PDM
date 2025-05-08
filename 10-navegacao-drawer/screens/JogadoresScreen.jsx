import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const jogadores = [
  {
    id: '1',
    nome: 'Agustín Rossi',
    posicao: 'Goleiro',
    imagem: 'https://i.pinimg.com/736x/eb/a3/c3/eba3c3d6cf992ad6225204892183bc6a.jpg',
  },
  {
    id: '2',
    nome: 'Léo Pereira',
    posicao: 'Zagueiro',
    imagem: 'https://i.pinimg.com/736x/d5/29/90/d52990f194822749080a5177c78edcea.jpg',
  },
  {
    id: '3',
    nome: 'Gerson',
    posicao: 'Meio-campista',
    imagem: 'https://i.pinimg.com/736x/cf/fc/0f/cffc0f74fe2b2126a94b63b5f93bdfd6.jpg',
  },
  {
    id: '4',
    nome: 'Giorgian De Arrascaeta',
    posicao: 'Meia',
    imagem: 'https://i.pinimg.com/736x/6f/7f/c0/6f7fc04c6c268851d9bee46180fb10e7.jpg',
  },
  {
    id: '5',
    nome: 'Pedro',
    posicao: 'Atacante',
    imagem: 'https://i.pinimg.com/736x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg',
  },
];

export default function JogadoresScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.posicao}>{item.posicao}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  posicao: {
    fontSize: 14,
    color: '#555',
  },
});
