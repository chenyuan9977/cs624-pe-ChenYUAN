import { Platform, StyleSheet } from 'react-native';

export const Colors = {
  dark: 'black',
  light: 'white',
};

const profileCardColor = 'dodgerblue';

const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const lightStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.light,
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.95,
        shadowRadius: 10,
      },
      android: {
        elevation: 25,
      },
    }),
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.9,
        shadowRadius: 8,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 2,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    textAlign: 'left',
  },
});

const darkStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.dark,
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'white',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.95,
        shadowRadius: 10,
      },
      android: {
        elevation: 25,
      },
    }),
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'white',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.9,
        shadowRadius: 8,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 2,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    textAlign: 'left',
  },
});

export default function getStyleSheet(useDarkTheme) {
  return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
