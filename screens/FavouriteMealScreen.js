import React from 'react';
import {MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const FavouriteMealScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const mealsToDisplay = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return (
    <MealList navigation={props.navigation} mealsToDisplay={mealsToDisplay}/>
  )
};

FavouriteMealScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Your favourite meals!'
  }
};

export default FavouriteMealScreen;