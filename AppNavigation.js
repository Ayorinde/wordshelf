import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Details from './pages/Details';
import Signup from './pages/Signup';
import AddClient from './pages/AddClient';

const AppNavigator = createStackNavigator(
    {
      Home: Home,
      Details: Details,
      Signup: Signup,
      AddClient: AddClient,
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none'
    }
  );

export default createAppContainer(AppNavigator);

