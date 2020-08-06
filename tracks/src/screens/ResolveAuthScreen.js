import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';


const ResolveAuthScreen = ({ navigation }) => {
    const { tryLocalSignIn } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignIn();
    }, []);

    return null;
};

ResolveAuthScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};



export default ResolveAuthScreen;
