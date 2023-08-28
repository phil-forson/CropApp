import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../StackNavigators/HomeStackNavigator';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return ( 
    <>
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
    </Tab.Navigator>
    </>
  );
};

export default HomeTab;
