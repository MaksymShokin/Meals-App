import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButtons';
import FavouriteMealScreen from './FavouriteMealScreen';

const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Favourite meals</Text>
    </View>
  )

};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter your meals!',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='sideMenu' iconName='ios-menu' onPress={()=> navData.navigation.toggleDrawer()}/>
      </HeaderButtons>
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FiltersScreen;