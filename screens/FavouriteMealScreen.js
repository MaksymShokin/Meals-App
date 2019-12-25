import React from 'react';
import {MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButtons';

const FavouriteMealScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const mealsToDisplay = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return (
    <MealList navigation={props.navigation} mealsToDisplay={mealsToDisplay}/>
  )
};

FavouriteMealScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your favourite meals!',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='sideMenu' iconName='ios-menu' onPress={()=> navData.navigation.toggleDrawer()}/>
      </HeaderButtons>
    )
  }
};

export default FavouriteMealScreen;