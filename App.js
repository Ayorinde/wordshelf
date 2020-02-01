/**
 * Our Clients App
 */

import React from 'react';
import {TextInput, SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import {colors} from './styles/colors';


const App = () =>{
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Our Clients</Text>
        
        <TextInput
          style={styles.searchInput}
          placeholder="Search ..."
        />
       
        <Text style={styles.list}>List of of Clients</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 0.4,
    backgroundColor: colors.primary,
    color: colors.light,
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 18,
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
  }
});

export default App;
