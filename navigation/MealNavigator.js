import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import FavouriteMealScreen from '../screens/FavouriteMealScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';
import {Platform} from 'react-native';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButtons';

const defaultNavOptionsConfig = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen
  },
  CategoryMeal: CategoryMealScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultNavOptionsConfig
});

const FavNavigator = createStackNavigator({
  Favourite: FavouriteMealScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultNavOptionsConfig
});

const FilterNavigator = createStackNavigator({
  Filters: FiltersScreen
},{
  defaultNavigationOptions: defaultNavOptionsConfig
});

const BottomTabNavigatorConfig = {
  Meals: {
    screen: MealNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
      },
      tabBarColor: Colors.primaryColor
    }
  },
  Favourites: {
    screen: FavNavigator, navigationOptions: {
      tabBarLabel: 'Favs!!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
      },
      tabBarColor: Colors.secondaryColor
    }
  }
};

const BottomTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(
  BottomTabNavigatorConfig,
  {
    shifting: true,
    activeColor: '#fff',
    barStyle: {
      backgroundColor: Colors.primaryColor
    }
  }
) : createBottomTabNavigator(BottomTabNavigatorConfig, {
  tabBarOptions: {
    activeTintColor: Colors.secondaryColor
  }
});

const DrawerNavigator = createDrawerNavigator({
  Meals: BottomTabNavigator,
  Filters: FilterNavigator
});

export default createAppContainer(DrawerNavigator)