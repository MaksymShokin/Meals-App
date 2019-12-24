import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';

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
    headerTitle: mealToDisplay.title
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