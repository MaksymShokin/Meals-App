import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import GridItem from '../components/GridItem';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButtons';

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

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='sideMenu' iconName='ios-menu' onPress={()=> navData.navigation.toggleDrawer()}/>
      </HeaderButtons>
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen

