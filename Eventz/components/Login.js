import React, {Component} from 'react';
import { 
    StyleSheet, 
    View
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    static defaultProps = {
        title: 'Login',
    };

    render(){
        const {navigate} =this.props.navigation;      
        return(
            <View style={styles.container}>
                <View style={styles.formcontainer}>
                    <LoginForm navigation={this.props.navigation}/>
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