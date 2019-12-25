import React from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const mealsToDisplay = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0);
  const catTitle = CATEGORIES.find(cat => cat.id === catId);

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