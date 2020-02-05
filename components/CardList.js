import React from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';
import {Card} from './Card';
import { TextInput } from 'react-native-gesture-handler';

export const CardList = ({list, onSelect}) => {

  if(!list || !list.length){
    return (<View style={styles.cardContainer}>
      <Text>No clients to show at the moment</Text>
    </View>)
  }

  return list.map((item) => {
      return (<View style={styles.cardContainer} key={item.id}>
        <TouchableHighlight onPress={()=> onSelect(item)} underlayColor={colors.primaryLight}>
          <Card item={item} />
        </TouchableHighlight>
      </View>)
  })
}

const styles = StyleSheet.create({
    cardContainer: {
        borderStyle: "solid",
        borderColor: colors.light,
        borderRadius: 8,
        borderWidth: 1,
        marginVertical: 4,
        padding: 10,
      }
})