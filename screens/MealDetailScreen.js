import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButtons';
import DefaultText from '../components/DefaultText';

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const mealToDisplay = MEALS.find(meal => meal.id === mealId);

  const ingredientsList = mealToDisplay.ingredients.map(elem => {
      return (
        <View style={styles.listTextContainer} key={elem}><DefaultText
          style={styles.listText}>{elem}</DefaultText></View>)
    }
  );

  const stepsList = mealToDisplay.steps.map(elem => {
      return (
        <View style={styles.listTextContainer} key={elem}><DefaultText
          style={styles.listText}>{elem}</DefaultText></View>)
    }
  );

  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{uri: mealToDisplay.imageUrl}}/>
      </View>
      <View style={styles.informationContainer}>
        <DefaultText>{mealToDisplay.duration}m</DefaultText>
        <DefaultText>{mealToDisplay.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{mealToDisplay.affordability.toUpperCase()}</DefaultText>
      </View>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>Ingredients</Text>
      </View>
      {ingredientsList}
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>Steps</Text>
      </View>
      <View style={styles.stepsContainer}>
        {stepsList}
      </View>
    </ScrollView>
  )
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const mealToDisplay = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: mealToDisplay.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Favourite' iconName='ios-star' onPress={() => console.log('fav')}/>
      </HeaderButtons>
    )
  }
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 240
  },
  informationContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#d6d4d4',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  listTextContainer: {
    marginHorizontal: 20
  },
  listText: {
    fontSize: 18
  },
  titleTextContainer: {
    marginTop: 15,
    marginBottom: 5
  },
  titleText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'open-sans-bold'
  },
  stepsContainer: {
    marginBottom: 50
  }
});

export default MealDetailScreen;