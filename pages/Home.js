/**
 * Our Clients App
 */

import React, {useEffect, useState} from 'react';
import {
    TextInput, StyleSheet, ScrollView, 
    View, Text, TouchableHighlight
  } from 'react-native';

import {colors} from '../styles/colors';
import {companies} from '../data/data';
import {CardList} from '../components/CardList';

import {getClients, signout} from '../firebase';
import {useContextAuth} from '../state_providers'

const Home = ({navigation}) =>{
  const [clients, setClients] = useState([]);
  const {auth} = useContextAuth();
  let {user} = auth;

  const onSelect = (item) =>{
    navigation.navigate('Details', item);
  }

  useEffect(()=>{
    //will create store for this as well just as with authentication
    const clientsRequest = async() =>{
      const theClients = await getClients();
      console.log('done getting clients: ',theClients);
      setClients(theClients);
      
    }
    clientsRequest();
  },[])

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Our Clients</Text>

        <TouchableHighlight  style={styles.floatTopRight} onPress={() => navigation.navigate('AddClient')} >
            <Text style={styles.topLink}>Add</Text>
        </TouchableHighlight>
        {user && (
          <TouchableHighlight  style={styles.floatTopLeft} onPress={() => navigation.navigate('Profile', user)} >
            <Text style={styles.topLink}>Profile</Text>
          </TouchableHighlight>
        )}

       <TextInput style={styles.searchInput} placeholder="Search ..."/>

        <View style={styles.list}>
          <ScrollView>
            <CardList list={clients} onSelect={onSelect} />
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
  floatTopRight: {
      position: 'absolute',
      top: 20,
      right: 18
  },
  floatTopLeft: {
      position: 'absolute',
      top: 20,
      left: 18
  },
  topLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.light3,
  },
});

export default Home;
