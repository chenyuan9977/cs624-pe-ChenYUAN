import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require('@/assets/images/icon.png')}
        style={styles.image}
      />
      <Text style={styles.label}>Which course did you like?</Text>
      <TextInput 
        style={styles.input} 
        placeholder="ex. CS624"
      />
      <View style={styles.sectionHeader}>
        <Text style={styles.headerText}>Core Requirements (24 credits)</Text>
      </View>
      <Text style={styles.item}>CS 504 Software Engineering</Text>
      <Text style={styles.item}>CS 506 Programming for Computing</Text>
      <Text style={styles.item}>CS 519 Cloud Computing Overview</Text>
      <Text style={styles.item}>CS 533 Computer Architecture</Text>
      <Text style={styles.item}>CS 547 Secure Systems and Programs</Text>
      <Text style={styles.item}>CS 622 Discrete Math and Algorithms for Computing</Text>
      <Text style={styles.item}>DS 510 Artificial Intelligence for Data Science</Text>
      <Text style={styles.item}>DS 620 Machine Learning & Deep Learning</Text>

      <View style={styles.sectionHeader}>
        <Text style={styles.headerText}>Depth of Study (6 Credits)</Text>
      </View>
      <Text style={styles.item}>CS 624 Full-Stack Development - Mobile App</Text>
      <Text style={styles.item}>CS 628 Full-Stack Development - Web App</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  sectionHeader: {
    backgroundColor: 'yellow',
    padding: 10,
    marginTop: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  item: {
    fontSize: 16,
    marginVertical: 2,
  },
});
