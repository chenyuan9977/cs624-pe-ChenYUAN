import React, { Component } from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

const profileCardColor = 'dodgerblue';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image 
              style={styles.cardImage}
              source={require('../../assets/images/user.png')}
            />
          </View>
          <Text style={[styles.nameText, { color: 'white', fontWeight: 'blod' }]}>Chen Yuan</Text>
          <Text style={[styles.titleText, { color: 'black', textDecorationLine: 'underline' }]}>CS624 Student</Text>
          <Text
            style={{
              color: 'yellow',
              fontSize: 14,
              marginTop: 10,
              lineHeight: 18,
            }}
          >
            An experienced software developer specializing in mobile applications and user-friendly interfaces.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   
    alignItems: 'center'        
  },
  cardContainer: {
    alignItems: 'center',
    borderColer: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,  
    width: 300,
    height: 400
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderradius: 60,
    marginTop: 30,
    paddingTop: 15
  },
  cardimage:{
    width: 80,
    height: 80
  }
});