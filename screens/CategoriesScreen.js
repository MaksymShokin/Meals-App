import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoriesScreen = props => {
  console.log(props)
  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
      <Button title='GO TO MEALS' onPress={()=>{
        props.navigation.navigate({routeName: 'CategoryMeal'})
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

export default CategoriesScreen

