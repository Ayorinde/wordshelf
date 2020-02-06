import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, StyleSheet} from 'react-native';

import {colors} from '../styles/colors';
import {signin} from '../firebase';
import {useTextInput} from '../react_hooks'

import {useContextAuth, doSignup, doSignin} from '../state_providers';
import {auth as firebaseAuth} from '../firebase';
import { SET_USER } from '../state_providers/constants';

export default Signup = ({navigation}) => {
    const firstName = useTextInput();
    const lastName = useTextInput();
    const email = useTextInput();
    const password = useTextInput();

    let {signup, auth, dispatchAuth} = useContextAuth();
    let {pending} = auth;
    

    const handleSignup = async () =>{
        let response = await doSignup(dispatchAuth, {
          email: email.value, password: password.value, 
            firstName: firstName.value, lastName: lastName.value
        });  
        navigation.navigate('Home', response)      
    }

    const handleSignin = async () =>{
      let response = await doSignin(dispatchAuth,{email: email.value, password: password.value}); 
      navigation.navigate('Home', response);       
    }

    useEffect(()=>{
      firebaseAuth.onAuthStateChanged(function(user) {
        if (user) {
          dispatchAuth({type: SET_USER, payload: user})
          navigation.navigate('Home')
        } 
      });
      
    },[])

    return (
      <View style={styles.container}>
        <Text style={styles.header}> Our Clients </Text>
        <Text style={styles.subhead}>Sigup to manage your clients</Text>
        <View style={styles.body}>
        <TextInput
            underlineColorAndroid={'transparent'}
            placeholder='first name'
            placeholderTextColor={colors.light3}
            style={styles.input}
            {...firstName}
        />
        <TextInput
            underlineColorAndroid={'transparent'}
            placeholder='last name'
            placeholderTextColor={colors.light3}
            style={styles.input}

            {...lastName}
        />
        <TextInput
            underlineColorAndroid={'transparent'}
            placeholderTextColor={colors.light3}
            style={styles.input}

            placeholder='email'
            {...email}
        />

        <TextInput
            underlineColorAndroid={'transparent'}
            placeholder='password'
            placeholderTextColor={colors.light3}
            style={styles.input}

            {...password}
        />

      <View style={styles.buttonSection}>
        {pending && <Text style={{textAlign: 'center', color: colors.light2}}>... loading ...</Text>}
        <TouchableHighlight  style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>

        <TouchableHighlight  style={styles.button} onPress={handleSignin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableHighlight>

      </View>

        </View>
      </View> 
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: colors.primary,
    color: colors.light,
    padding: 20,
    paddingTop: 40,
  },
  header:{
    color: colors.light2,
    fontSize: 24,
    textAlign: 'center',
  },
  subhead: {
    fontSize: 14,
    color: colors.light2,
    fontStyle: 'italic',
    padding: 8,
    textAlign: 'center',
  },
  input: {
    color: colors.light2,
    fontSize: 16,
    fontStyle: 'italic',

  },
  buttonSection: {
    marginVertical: 20,
  },
  button: {
    borderColor: colors.light3,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 2,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.light3,
    padding: 10,

  }

})