import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {ThemeProvider} from 'styled-components';
import colors from './src/assets/colors';

import Routes from './src/routes/Routes';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#b7b7c8',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <ThemeProvider theme={colors}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
