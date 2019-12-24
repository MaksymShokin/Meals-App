import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback} from 'react-native';

const GridItem = props => {
  let GridItemContainer = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version > 21) {
    GridItemContainer = TouchableNativeFeedback
  }

  return (
    <View style={styles.gridItemContainer}>
      <GridItemContainer style={styles.gridItem}  onPress={props.onSelect}>
        <View style={{...styles.listItem, backgroundColor: props.color}}>
          <Text style={styles.text} numberOfLines={2}>{props.title}</Text>
        </View>
      </GridItemContainer>
    </View>
  )
};

const styles = StyleSheet.create({
  gridItemContainer: {
    flex: 1,
    margin: 12,
    height: 150,
    borderRadius: 15,
    elevation: 5,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible'
  },
  gridItem: {
    flex: 1
  },
  listItem: {
    flex: 1,
    borderRadius: 15,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 22,
    fontFamily: 'open-sans-bold',
    textAlign: 'right'
  }
});

export default GridItem