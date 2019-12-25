import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FavouriteMealScreen from '../screens/FavouriteMealScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Platform} from 'react-native';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';

const MealNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories'
    }
  },
  CategoryMeal: CategoryMealScreen,
  MealDetail: MealDetailScreen
}, {
    navigationOptions: {
      tabBarLabel: 'Favesfsfs!!',
    }
},
  {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }
});

const BottomTabNavigator = createBottomTabNavigator({
  Meals: {screen: MealNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
    }
    }},
  Favourites: {screen: FavouriteMealScreen, navigationOptions: {
    tabBarLabel: 'Favs!!',
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
    }
  }}
}, {
  tabBarOptions: {
    activeTintColor: Colors.secondaryColor
  }
});

export default createAppContainer(BottomTabNavigator)