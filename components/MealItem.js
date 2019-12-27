import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

import DefaultText from './DefaultText';

const MealItem = props => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={styles.imageContainer}>
            <ImageBackground style={styles.image} source={{uri: props.imageUrl}}>
              <Text style={styles.imageTitle}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={styles.informationContainer}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    height: 200,
    width: '100%',
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden'
  },
  imageContainer: {
    height: '85%',
    flexDirection: 'row'
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  imageTitle: {
    fontFamily: 'open-sans-bold',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  informationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '15%',
    backgroundColor: '#d6d4d4',
    alignItems: 'center',
    paddingHorizontal: 15
  }
});

export default MealItem