import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import getStyleSheet from './styles';

export default function ProfileCard({ profile, expanded, onPress }) {
  const styles = getStyleSheet(false); // dark theme not used here

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.cardContainer, expanded && localStyles.expanded]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={profile.image} />
        </View>
        <Text style={styles.nameText}>{profile.name}</Text>
        <Text style={styles.titleText}>{profile.title}</Text>
        {expanded && (
          <Text style={styles.descriptionText}>{profile.description}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  expanded: {
    transform: [{ scale: 1.3 }],
    zIndex: 1,
  },
});
