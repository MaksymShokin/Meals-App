import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Platform} from 'react-native';
import Colors from '../constants/Colors';

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
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }
});

export default createAppContainer(MealNavigator)