/**
 * Our Clients App
 */

import React from 'react';
import {
    TextInput, StyleSheet, ScrollView, 
    View, Text
  } from 'react-native';

import {colors} from '../styles/colors';
import {companies} from '../data/data';
import {CardList} from '../components/CardList';


const Home = ({navigation}) =>{
  const onSelect = (item) =>{
    navigation.navigate('Details', item);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Our Clients</Text>
        <Text style={[styles.topLink, styles.rightLink]}>Add</Text>
        <Text style={[styles.topLink, styles.leftLink]}>Profile</Text>
        <TextInput style={styles.searchInput} placeholder="Search ..."/>

        <View style={styles.list}>
          <ScrollView>
            <CardList list={companies} onSelect={onSelect} />
          </ScrollView>  
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    color: colors.light
  },
  header: {
    flex: 0.4,
    backgroundColor: colors.primary,
    color: colors.light,
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 20,
    fontWeight: "bold",

  },
  searchInput: {
    backgroundColor: colors.light,
    borderRadius: 8,
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  list: {
    padding: 15,
    color: colors.light,
    flex: 10,
  },
  topLink: {
    position: 'absolute',
    top: 20,
    color: colors.light3,
    fontSize: 16,
    fontWeight: 'bold'     
  },
  rightLink: {
      right: 18,
  },
  leftLink: {
    left: 18,
  }
});

export default Home;
