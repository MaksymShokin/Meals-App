import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from './MealItem';

const MealList = props => {
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
              mealId: itemData.item.id,
              title: itemData.item.title,
              ifFav: itemData.item
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