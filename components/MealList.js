import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from './MealItem';
import {useSelector} from 'react-redux';

const MealList = props => {
  const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

  const renderMealItem = itemData => {
    const currentMealIsFav = favouriteMeals.find(meal => meal.id === itemData.item.id);

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
              mealId: itemData.item.id,
              title: itemData.item.title,
              isFav: currentMealIsFav
            }
          })
        }}
      />
    )
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.flatList}
        data={props.mealsToDisplay}
        renderItem={renderMealItem}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  flatList: {
    width: '100%'
  }
});

export default MealList