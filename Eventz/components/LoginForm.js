import React, {Component} from 'react';
import { 
    StyleSheet, 
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

export default class LoginForm extends Component {
    render(){
        const {navigate} = this.props.navigation;
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput 
                    placeholder="username or email"
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType="Next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="password"
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType="Go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navgate('Maps')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({  
    container: {
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom:15,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});