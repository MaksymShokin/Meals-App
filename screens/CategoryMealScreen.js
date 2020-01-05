import React from 'react';
import {StyleSheet} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import Colors from '../constants/Colors';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const mealsToDisplay = availableMeals.filter(meal => meal.categoryId.indexOf(catId) >= 0);

  if (!mealsToDisplay.length) {
    return (
      <View style={styles.screen}><Text style={styles.noMealsText}>No meals. Maybe check your filters?</Text></View>
    )
  }

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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noMealsText: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'open-sans-bold',
    color: Colors.primaryColor
  }
});

export default CategoryMealScreen