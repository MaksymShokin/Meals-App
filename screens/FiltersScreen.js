import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButtons';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const FiltersSwitch = props => {
  return (
    <View style={styles.switchContainer}>
      <DefaultText style={styles.label}>{props.title}</DefaultText>
      <Switch
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        trackColor={{true: Colors.primaryColor}}
        value={props.state}
        onValueChange={props.onChange}/>
    </View>
  )
};

const FiltersScreen = props => {
  const {navigation} = props;

  const [glutenFree, setGlutenFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const filters = {
      glutenFree,
      lactoseFree,
      vegan,
      vegetarian
    };

    console.log(filters)
  }, [glutenFree, lactoseFree, vegan, vegetarian]);

  useEffect(() => {
      navigation.setParams({save: saveFilters})
    }, [saveFilters]
  );

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.title}>Filters available</Text>
      </View>
      <FiltersSwitch title={'Gluten free'} state={glutenFree} onChange={newValue => setGlutenFree(newValue)}/>
      <FiltersSwitch title={'Lactose free'} state={lactoseFree} onChange={newValue => setLactoseFree(newValue)}/>
      <FiltersSwitch title={'Vegan'} state={vegan} onChange={newValue => setVegan(newValue)}/>
      <FiltersSwitch title={'Vegetarian'} state={vegetarian} onChange={newValue => setVegetarian(newValue)}/>
    </View>
  )
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter your meals!',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='sideMenu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()}/>
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='sideMenu' iconName='ios-save' onPress={navData.navigation.getParam('save')}/>
      </HeaderButtons>
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    marginVertical: 20
  },
  switchContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  label: {
    fontSize: 18,
    color: Colors.primaryColor
  }
});

export default FiltersScreen;