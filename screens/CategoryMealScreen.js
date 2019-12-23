import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const catTitle = CATEGORIES.find(cat=> cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>CategoryMeals</Text>
      <Text>{catTitle.title}</Text>
      <Button title='Go to Meals Screen' onPress={()=>{
        props.navigation.navigate({
          routeName: 'MealDetail'
        })
      }}/>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen