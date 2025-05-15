import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import MegaSenaScreen from './screens/MegaSenaScreen';
import BichoScreen from './screens/JogoDoBichoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: true,
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { paddingBottom: 5, height: 60 },
            tabBarIcon: ({ color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Mega-Sena':
                  iconName = 'numeric';
                  break;
                case 'Jogo do Bicho':
                  iconName = 'dog';
                  break;
                default:
                  iconName = 'apps';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Mega-Sena" component={MegaSenaScreen} />
          <Tab.Screen name="Jogo do Bicho" component={BichoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

