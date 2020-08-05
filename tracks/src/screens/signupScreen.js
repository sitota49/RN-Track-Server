import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    return <>
        <Text style={{ fontSize: 48 }}>SignUpScreen</Text>
        <Button
            title="Go to Signin"
            onPress={() => navigation.navigate('signIn')} />
        <Button
            title="Go to Main Flow"
            onPress={() => navigation.navigate('mainFlow')} />
    </>
};

const styles = StyleSheet.create({});

export default SignUpScreen;
