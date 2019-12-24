import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import GridItem from '../components/GridItem';

const CategoriesScreen = props => {
  const renderListItem = itemData => {
    return (
      <GridItem
        style={styles.screen}
        color={itemData.item.color}
        title={itemData.item.title}
        onSelect={()=>{
          props.navigation.navigate({
            routeName: 'CategoryMeal',
            params: {
              categoryId: itemData.item.id
            }
          })
        }}
      />
    )
  };

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderListItem}
    />
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen

