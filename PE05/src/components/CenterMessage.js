import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../theme';

const CenterMessage = ({ message }) => (
  <View style={styles.emptyContainer}>
    <Text style={styles.message}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  message: {
    fontSize: 20,
  },
});

export default CenterMessage;
