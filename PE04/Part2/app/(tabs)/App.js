import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import ProfileCard from './ProfileCard';
import getStyleSheet from './styles';

const profiles = Array.from({ length: 9 }).map((_, index) => ({
  id: index.toString(),
  name: 'John Doe',
  title: 'React Native Developer',
  description:
    'John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.',
  image: require('../../assets/images/user.png'),
}));

export default function App() {
  const [expandedId, setExpandedId] = useState(null);
  const [useDarkTheme] = useState(false);
  const styles = getStyleSheet(useDarkTheme);

  const handleCardPress = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <ProfileCard
            profile={item}
            expanded={expandedId === item.id}
            onPress={() => handleCardPress(item.id)}
          />
        )}
        contentContainerStyle={localStyles.grid}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  grid: {
    justifyContent: 'center',
    paddingVertical: 20,
  },
});
