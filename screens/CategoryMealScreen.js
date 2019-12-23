import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoriesScreen from './CategoriesScreen';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const catTitle = CATEGORIES.find(cat=> cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>{catTitle.title}</Text>
      <Text>CategoryMeals</Text>
      <Button title='Go to Meals Screen' onPress={()=>{
        props.navigation.navigate({
          routeName: 'MealDetail'
        })
      }}/>
    </View>
  )
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const catTitle = CATEGORIES.find(cat=> cat.id === catId);

  return {
    headerTitle: catTitle.title
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen