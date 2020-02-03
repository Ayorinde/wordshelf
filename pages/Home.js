/**
 * Our Clients App
 */

import React from 'react';
import {
    TextInput, SafeAreaView, StyleSheet, ScrollView, 
    View, Text, StatusBar, TouchableHighlight
  } from 'react-native';

import {colors} from '../styles/colors';
import {companies} from '../data/data';
import {CardList} from '../components/CardList';


const Home = ({navigation}) =>{
  const onSelect = () =>{
    navigation.navigate('Details')
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Our Clients</Text>
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
});

export default Home;
