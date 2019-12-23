import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMeals</Text>
      <Button title='Go to Meals Screen' onPress={()=>{
        props.navigation.navigate({
          routeName: 'MealDetail'
        })
      }}/>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen