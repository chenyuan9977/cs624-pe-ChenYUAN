import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellowText}>Chen YUAN</Text>
      <Text style={styles.yellowText}>MSCS</Text>
      <Text style={styles.yellowText}>STC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Optional: Background color for the whole screen
    alignItems: 'center',
    justifyContent: 'center',
  },
  yellowText: {
    backgroundColor: 'yellow',
    padding: 10,
    marginVertical: 5,
  },
});
