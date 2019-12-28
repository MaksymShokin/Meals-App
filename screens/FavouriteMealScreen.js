import React from 'react';
import MealList from '../components/MealList';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButtons';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const FavouriteMealScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const availableMeals = useSelector(state => state.meals.favouriteMeals);

  let mealsToDisplay = <MealList navigation={props.navigation} mealsToDisplay={availableMeals}/>;

  if (!availableMeals.length) {
    mealsToDisplay =
      <View style={styles.screen}><Text style={styles.noMealsText}>No meals are selected as favourite</Text></View>
  }

  return (
    <React.Fragment>
      {mealsToDisplay}
    </React.Fragment>
  )
};

FavouriteMealScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your favourite meals!',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='sideMenu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()}/>
      </HeaderButtons>
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noMealsText: {
    fontSize: 22,
    fontFamily: 'open-sans-bold',
    color: Colors.primaryColor
  }
});

export default FavouriteMealScreen;