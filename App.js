/**
 * Our Clients App
 */

import React from 'react';
import {TextInput, SafeAreaView, StyleSheet, ScrollView, 
  View, Text, StatusBar, TouchableHighlight} from 'react-native';
import {colors} from './styles/colors';
import {companies} from './data/data';


const App = () =>{
  const onSelect = () =>{
    //nothing for now
  }
  const companiesMarkup = companies.map(({id, name, contactName, contactPhone, companyDescription}) => {
    return (<View style={styles.cardContainer} key={id}>
      <TouchableHighlight onPress={onSelect} underlayColor={colors.primaryLight}>
        <View>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardBodyText}>{contactName}</Text>
          <Text style={styles.cardBodyText}>{contactPhone}</Text>
          <Text style={styles.cardBodyText}>{companyDescription}</Text>
        </View>  
      </TouchableHighlight>
    </View>)
  })
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Our Clients</Text>
        
        <TextInput
          style={styles.searchInput}
          placeholder="Search ..."
        />

        <View style={styles.list}>
          <ScrollView>
            {companiesMarkup}
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
  //card styles
  cardContainer: {
    borderStyle: "solid",
    borderColor: colors.light,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 4,
    padding: 10,
  },
  cardTitle: {
    color: colors.light,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,

  },
  cardBodyText: {
    color: colors.grayDark,
    fontSize: 16,
  }
});

export default App;
