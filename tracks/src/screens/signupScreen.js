import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm'


const SignUpScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <TouchableOpacity onPress={() => { navigation.navigate('signIn') }}>
                <Spacer>
                    <Text style={styles.link}>Already have an account? Sign in instead.</Text>
                </Spacer>
            </TouchableOpacity>

        </View>);
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 115
    },
    link: {
        color: 'blue',
        marginTop: 15
    }
});

export default SignUpScreen;
