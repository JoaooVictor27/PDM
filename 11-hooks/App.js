import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Nome from "./src/components/Nome";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start work</Text>
      <StatusBar style="auto" />
    
      <Nome/>
     
    </View>
    
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
