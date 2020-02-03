import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Details from './pages/Details';

const AppNavigator = createStackNavigator(
    {
      Home: Home,
      Details: Details,
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none'
    }
  );

export default createAppContainer(AppNavigator);

