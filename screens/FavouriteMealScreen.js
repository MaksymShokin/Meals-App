import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavouriteMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>FAVOURITES</Text>
    </View>
  )

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavouriteMealScreen;