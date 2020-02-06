import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

import {colors} from '../styles/colors';
import {useContextAuth, doSignout} from '../state_providers'

export default Profile = ({navigation}) => {
  const {signout, dispatchAuth} = useContextAuth();

  let user = navigation.state.params;
  const handleSignout = async() => {
    await doSignout(dispatchAuth);
    navigation.navigate('Signup');
  }

  let {email, uid} = user;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{email}</Text>
        <View style={styles.body}>
        <TouchableHighlight style={styles.button}  onPress={handleSignout} >
            <Text style={styles.buttonText}>log out</Text>
          </TouchableHighlight>
   
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
  },
  topLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.light3,
  },
  button: {
    borderColor: colors.light3,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    

  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.light3,
    padding: 10,

  }
});
