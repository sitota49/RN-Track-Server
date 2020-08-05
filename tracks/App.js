import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/accountScreen';
import SignInScreen from './src/screens/signinScreen';
import SignUpScreen from './src/screens/signupScreen';
import TrackCreateScreen from './src/screens/trackCreateScreen';
import TrackDetailScreen from './src/screens/trackDetailScreen';
import TrackListScreen from './src/screens/trackListScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    signUp: SignUpScreen,
    signIn: SignInScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      trackList: TrackListScreen,
      trackDetail: TrackDetailScreen
    }),
    trackCreate: TrackCreateScreen,
    account: AccountScreen
  })
});

export default createAppContainer(switchNavigator);