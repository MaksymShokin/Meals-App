import React from 'react';
import {View, Text, StyleSheet, Button, Platform, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';

import MealItem from '../components/MealItem'

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        onSelect={()=>{
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id
            }
          })
        }}
      />
    )
  };

  const catId = props.navigation.getParam('categoryId');
  const mealsToDisplay = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0);
  const catTitle = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.flatList}
        data={mealsToDisplay}
        renderItem={renderMealItem}
      />
    </View>
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
    alignItems: 'center',
    padding: 15
  },
  flatList: {
    width: '100%'
  }
});

export default CategoryMealScreen