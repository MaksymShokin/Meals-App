import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButtons';

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const mealToDisplay = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{mealToDisplay.title}</Text>
    </View>
  )
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const mealToDisplay = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: mealToDisplay.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Favourite' iconName='ios-star' onPress={()=> console.log('fav')}/>
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

export default MealDetailScreen;