import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Details from '../screens/Details';

const App = createStackNavigator();

const Routes = () => {
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Details" component={Details} />
    </App.Navigator>
  );
};

export default Routes;
