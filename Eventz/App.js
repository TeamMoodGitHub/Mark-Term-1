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

class HomeScreen extends Component{
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Second')}
                    title="Second Screen"
                />
            </View>
        );
    }
}

class SecondScreen extends Component{
    static navigationOptions = {
        title: 'Second Screen'
    };
    render(){
        return(
            <View>
                <Text>Second Screen Lit AF</Text>
            </View>
        );
    }
}

const Eventz = StackNavigator({
    Home: {screen: HomeScreen},
    Second: {screen: SecondScreen},
});

AppRegistry.registerComponent('Eventz', () => Eventz);
