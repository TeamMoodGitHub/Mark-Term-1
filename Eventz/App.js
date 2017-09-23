import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button
} from 'react-native';

import{
    StackNavigator
} from 'react-navigation';

import Maps from './components/Map';
import Login from './components/Login';

class App extends Component{
    render() {
        return (
            <Login />
        );
    }
}

const Eventz = StackNavigator({
    Login: {screen: Login},
    Maps: {screen: Maps},
});

export default Eventz;

AppRegistry.registerComponent('Eventz', () => Eventz);
