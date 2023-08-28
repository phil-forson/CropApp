import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../../screens/Search';
import Settings from '../../screens/Settings';
import Theme from '../../screens/Theme';
import Weather from '../../screens/Weather';
import Security from '../../screens/Security';
import FAQ from '../../screens/FAQ';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';
import LogIn from '../../screens/LogIn';
import AuthStackNavigators from './AuthStackNavigators';

const Stack = createNativeStackNavigator();

const SettingsStackNavigators = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
    }}>
      <Stack.Screen
        name="Settings"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#f2efee',
          },
        }}
        component={Settings}
      />
      <Stack.Screen
        name="Theme"
        options={{
          headerStyle: {
            backgroundColor: '#f2efee',
          },
        }}
        component={Theme}
      />
      <Stack.Screen
        name="Weather"
        options={{
          headerStyle: {
            backgroundColor: '#f2efee',
          },
        }}
        component={Weather}
      />
      <Stack.Screen
        name="Security"
        options={{
          headerStyle: {
            backgroundColor: '#f2efee',
          },
        }}
        component={Security}
      />
      <Stack.Screen
        name="FAQ"
        options={{
          headerStyle: {
            backgroundColor: '#f2efee',
          },
        }}
        component={FAQ}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        options={{
          headerStyle: {
            backgroundColor: '#f2efee',
          },
        }}
        component={PrivacyPolicyScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'medium',
    color: 'black',
  },
});

export default SettingsStackNavigators;
