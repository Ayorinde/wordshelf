import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, StyleSheet} from 'react-native';

import {colors} from '../styles/colors';
import {signup, signin} from '../firebase';
import {useTextInput} from '../react_hooks'

export default Signup = ({navigation}) => {
    const firstName = useTextInput();
    const lastName = useTextInput();
    const email = useTextInput();
    const password = useTextInput();

    const doSignup = async () =>{
        let response = await signup({email: email.value, password: password.value, 
            firstName: firstName.value, lastName: lastName.value});        
    }
    const doLogin = async () =>{
        let response = await signin({email: email.value, password: password.value});        
    }

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
        <TouchableHighlight  style={styles.button} onPress={() => doSignup()}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>

        <TouchableHighlight  style={styles.button} onPress={() => doLogin()}>
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