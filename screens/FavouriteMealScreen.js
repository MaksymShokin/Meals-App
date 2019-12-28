import React from 'react';
import MealList from '../components/MealList';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButtons';
import {useSelector} from 'react-redux';

const FavouriteMealScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const availableMeals = useSelector(state => state.meals.favouriteMeals);

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