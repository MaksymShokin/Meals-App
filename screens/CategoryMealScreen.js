import React from 'react';
import {View, Text, StyleSheet, Button, Platform, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <View>
        {/*<Button*/}
        {/*  onPress={() => {*/}
        {/*    props.navigation.navigate({*/}
        {/*      routeName: 'MealDetail',*/}
        {/*      params: {*/}
        {/*        mealId: itemData.item.id*/}
        {/*      }*/}
        {/*    })*/}
        {/*  }}*/}
        {/*/>*/}
        <Text>{itemData.item.title}</Text>
      </View>
    )
  };

  const catId = props.navigation.getParam('categoryId');
  const mealsToDisplay = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0);
  const catTitle = CATEGORIES.find(cat => cat.id === catId);



  return (
    <View style={styles.screen}>
      <FlatList
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
    alignItems: 'center'
  },
  meal: {
    height: 150
  }
});

export default CategoryMealScreen