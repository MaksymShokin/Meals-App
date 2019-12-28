import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const mealsToDisplay = availableMeals.filter(meal => meal.categoryId.indexOf(catId) >= 0);

  return (
    <MealList navigation={props.navigation} mealsToDisplay={mealsToDisplay}/>
  )
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const catTitle = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: catTitle.title
  }
};

export default CategoryMealScreen