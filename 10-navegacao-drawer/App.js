import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { PaperProvider } from 'react-native-paper';


import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';


const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1e293b',
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#94a3b8',
      }}>
      <Tab.Screen
        name="Escudo"
        component={EscudoScreen}
        options={{
          title: 'Escudo',
          headerTitleAlign: 'center',
          headerTintColor: 'red',
          headerStyle: { backgroundColor: '#1e293b' },
          tabBarIcon: ({ color, size }) => <Ionicons name="shield" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Jogadores"
        component={JogadoresScreen}
        options={{
          title: 'Jogador',
          headerTitleAlign: 'center',
          headerTintColor: 'red',
          headerStyle: { backgroundColor: '#1e293b' },
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Titulos"
        component={TitulosScreen}
        options={{
          title: 'Títulos',
          headerTitleAlign: 'center',
          headerTintColor: 'red',
          headerStyle: { backgroundColor: '#1e293b' },
          tabBarIcon: ({ color, size }) => <Ionicons name="trophy" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Principal">
          <Drawer.Screen
            name="Principal"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
         
        </Drawer.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
