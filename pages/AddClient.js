import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, StyleSheet} from 'react-native';

import {colors} from '../styles/colors';
import {addClient} from '../firebase';
import {useTextInput} from '../react_hooks'

export default AddClient = ({navigation}) => {
    const name = useTextInput();
    const contactName = useTextInput();
    const contactPhone = useTextInput();
    const companyDescription = useTextInput();

    const doAddClient = async () =>{
        let response = await addClient({name: name.value, contactName: contactName.value, 
            contactPhone: contactPhone.value, companyDescription: companyDescription.value});
        console.log('done adding client');        
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}> Add A Client </Text>
        <View style={styles.body}>
        <TextInput
            underlineColorAndroid={'transparent'}
            placeholder='company name'
            placeholderTextColor={colors.light3}
            style={styles.input}
            {...name}
        />
        <TextInput
            underlineColorAndroid={'transparent'}
            placeholder='contact name'
            placeholderTextColor={colors.light3}
            style={styles.input}

            {...contactName}
        />
        <TextInput
            underlineColorAndroid={'transparent'}
            placeholderTextColor={colors.light3}
            style={styles.input}

            placeholder='contact phone'
            {...contactPhone}
        />

        <TextInput
            underlineColorAndroid={'transparent'}
            placeholder='company description'
            placeholderTextColor={colors.light3}
            style={styles.input}

            {...companyDescription}
        />



      <View style={styles.buttonSection}>
        <TouchableHighlight  style={styles.button} onPress={() => doAddClient()}>
          <Text style={styles.buttonText}>Add Client</Text>
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