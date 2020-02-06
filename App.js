import React from 'react';
import AppNavigation from './AppNavigation';
import {AuthProvider} from './state_providers';

const App = ({navigation}) => (<AuthProvider><AppNavigation /></AuthProvider> )

export default App;
