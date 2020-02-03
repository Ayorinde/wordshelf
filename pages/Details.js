import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../styles/colors';

export default Details = ({navigation}) => {

  let item = navigation.state.params;
  let {name, contactName, contactPhone, companyDescription} = item;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{name}</Text>
        <View style={styles.body}>
          <Text style={[styles.grayText, styles.description]}>{companyDescription}</Text>
          <Text style={[styles.grayText, styles.subheader]}>contact:</Text>
          <Text style={styles.grayText}>{contactName}</Text>
          <Text style={styles.grayText}>{contactPhone}</Text>     
        </View>
      </View> 
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    color: colors.light
  },
  header: {
    flex: 0.3,
    backgroundColor: colors.primary,
    color: colors.light,
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 20,
    fontWeight: "bold",

  },
  body: {
    backgroundColor: colors.light,
    flex: 6,
    padding: 5,
  },
  subheader: {
    color: colors.primary
  },
  grayText: {
    color: colors.grayDark,
    fontSize: 20,
    textAlign: 'center'
  },
  description: {
    padding: 10,
  }
});
