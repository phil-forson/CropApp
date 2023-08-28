import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderHistory from '../../screens/OrderHistory';
import CustomerOrderHistory from '../../screens/CustomerOrderHistory';

const Tab = createMaterialTopTabNavigator();

const HistoryTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarInactiveTintColor: 'black',
        tabBarIndicatorStyle: { backgroundColor: 'green' }, // Set the color of the tab indicator
      }}
    >
      <Tab.Screen
        name="Seller"
        component={OrderHistory}
        options={{
          tabBarStyle: {
            backgroundColor: '#f2efee', // Set the background color
            borderWidth: 0,
          },
        }}
      />
      <Tab.Screen
        name="Buyer"
        component={OrderHistory}
        options={{
          tabBarStyle: {
            backgroundColor: '#f2efee',
            borderWidth: 0,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HistoryTab;
