import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import HomeScreen from './Screens/HomeScreen';
import ListaProdutosScreen from './Screens/ListaProdutosScreen';
import ProdutoScreen from './Screens/ProdutoScreen';

const Stack = createStackNavigator();

const temaPersonalizado = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', 
  },
};

export default function App() {
  return (
    <PaperProvider theme={temaPersonalizado}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Categorias' }} />
        <Stack.Screen name="Produtos" component={ListaProdutosScreen} options={{ title: 'Produtos' }} />
        <Stack.Screen name="Produto" component={ProdutoScreen} options={{ title: 'Detalhes do Produto' }} />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}