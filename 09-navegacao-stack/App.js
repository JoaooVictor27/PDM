i// App.js
import React from 'react';
import { NavigationContainer, DefaultTheme as NavTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme as PaperTheme } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import ReceitaScreen from './screens/ReceitaScreen';

const Stack = createStackNavigator();

const CustomTheme = {
  ...PaperTheme,
  colors: {
    ...PaperTheme.colors,
    primary: '#ff7043',
    accent: '#ffccbc',
    background: '#fff8f1',
    surface: '#ffffff',
    text: '#333',
  },
};

export default function App() {
  return (
    <PaperProvider theme={CustomTheme}>
      <NavigationContainer theme={NavTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#ff7043' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Receitas Deliciosas' }} />
          <Stack.Screen name="Receita" component={ReceitaScreen} options={{ title: 'Detalhes da Receita' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}