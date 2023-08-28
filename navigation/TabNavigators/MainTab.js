import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNavigator from '../StackNavigators/BuyStackNavigator';
import SellStackNavigator from '../StackNavigators/SellStackNavigator';
import BuyStackNavigator from '../StackNavigators/BuyStackNavigator';
import HistoryStackNavigators from '../StackNavigators/HistoryStackNavigators';
import SearchStackNavigators from '../StackNavigators/SearchStackNavigators';
import SettingsStackNavigators from '../StackNavigators/SettingsStackNavigators';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';

const Tab = createBottomTabNavigator();

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const MainTab = () => {
  const { user } = useAuth();
  const { userData } = useUser(user?.uid);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'green',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
    >
      {userData.accountType !== "Customer" &&<Tab.Screen
        name="Sell"
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require("../../assets/Images/money-recive.png")} style={{ height: 25, width: 25 }} />
          ),
        }}
        component={SellStackNavigator}
      />}
      {userData.accountType !== "Agric Company" && <Tab.Screen
        name="Buy"
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require("../../assets/Images/money-send.png")} style={{ height: 25, width: 25 }} />
          ),
        }}
        component={BuyStackNavigator}
      />}
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require("../../assets/Images/search.png")} style={{ height: 25, width: 25 }} />
          ),
        }}
        component={SearchStackNavigators}
      />
      <Tab.Screen name="History"
      options={{
        tabBarIcon: ({ color }) => (
          <Image source={require("../../assets/Images/history.png")} style={{ height: 25, width: 25 }} />
        ),
      }}
      component={HistoryStackNavigators} />
      <Tab.Screen name="Settings"
      options={{
        tabBarIcon: ({ color }) => (
          <Image source={require("../../assets/Images/Settings.png")} style={{ height: 25, width: 25 }} />
        ),
      }}
      component={SettingsStackNavigators} />
    </Tab.Navigator>
  );;
};

export default MainTab;
