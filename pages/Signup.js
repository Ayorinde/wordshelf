import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

import {colors} from '../styles/colors';
import {signup} from '../firebase';
import {useTextInput} from '../react_hooks'

export default Signup = ({navigation}) => {
    const firstName = useTextInput();
    const lastName = useTextInput();
    const email = useTextInput();
    const password = useTextInput();

    const doSignup = async () =>{
        //handle signup
        console.log(JSON.stringify({firstName: firstName.value, lastName: lastName.value, 
            email: email.value, password: password.value}, null, 4)
        )
        let response = await signup({email: email.value, password: password.value, 
            firstName: firstName.value, lastName: lastName.value});
        console.log('response: ', JSON.stringify(response, null, 4))
        
    }


    return (
      <View style={styles.container}>
        <Text style={styles.header}> Sign Up </Text>
        <View style={styles.body}>
        <TextInput
            underlineColorAndroid={'transparent'}
            placeholder='first name'
            {...firstName}
        />
        <TextInput
            underlineColorAndroid={'transparent'}
            placeholder='last name'
            {...lastName}
        />
        <TextInput
            underlineColorAndroid={'transparent'}
            placeholder='email'
            {...email}
        />

        <TextInput
            underlineColorAndroid={'transparent'}
            placeholder='password'
            {...password}
        />

        <Button
          title="Sign Up"
          color="#f194ff"
          onPress={() => doSignup()}
          /> 
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
})