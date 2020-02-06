import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Details from './pages/Details';
import Signup from './pages/Signup';
import AddClient from './pages/AddClient';
import Profile from './pages/Profile';
import {AuthProvider} from './state_providers';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Details: Details,
    Signup: Signup,
    AddClient: AddClient,
    Profile: Profile
  },
  {
    initialRouteName: 'Signup',
    headerMode: 'none'
  }
);

const NavigatorContainer = createAppContainer(AppNavigator);

export default Nav = () => {
  return (<AuthProvider><NavigatorContainer/></AuthProvider>)
}




