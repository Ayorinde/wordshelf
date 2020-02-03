import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';

export const Card = ({item}) => {
    let {id, name, contactName, contactPhone, companyDescription} = item;
    return (
      <View>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardBodyText}>{contactName}</Text>
        <Text style={styles.cardBodyText}>{contactPhone}</Text>
        <Text style={styles.cardBodyText}>{companyDescription}</Text>
      </View> 
    )
}

const styles = StyleSheet.create({
    cardTitle: {
    color: colors.light,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,

    },
    cardBodyText: {
    color: colors.light3,
    fontSize: 16,
    }
})