import React, {Component} from 'react';
import { 
    StyleSheet, 
    View
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={syles.formcontainer}>
                    <LoginForm />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});