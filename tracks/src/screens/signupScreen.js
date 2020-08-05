import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../compnents/spacer';
import { Context as AuthContext } from '../context/AuthContext'


const SignUpScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3> Sign Up for Tracker</Text>
            </Spacer>
            <Input label="Email"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail} />
            <Spacer />
            <Input label="Password"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={setPassword} />
            <Spacer />
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button title="Sign Up"
                    onPress={() => signup({ email, password })} />
            </Spacer>

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
        marginBottom: 150
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default SignUpScreen;
