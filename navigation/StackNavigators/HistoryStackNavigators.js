import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryTab from '../TabNavigators/HistoryTab';
import Cart from '../../screens/Cart';
import MyCart from '../../screens/MyCart';
import ProductCard from '../../screens/ProductCard';
import Payment from '../../screens/Payment';
import ConfirmPayment from '../../screens/ConfirmPayment';

const Stack = createNativeStackNavigator();

const HistoryStackNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderHistory"
        options={{
          headerStyle: {
            backgroundColor: '#f2efee',
          },
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Text style={styles.headerText}>Order History</Text>
            </View>
          ),
        }}
        component={HistoryTab}
      />
      <Stack.Screen
        name="Cart"
        options={{
          headerShown: false
          }}
        component={Cart}
      />
      <Stack.Screen
        name="MyCart"
        options={{
          headerShown: false
          }}
        component={MyCart}
      />
      <Stack.Screen
        name="ProductCard"
        options={{
          headerShown: false
          }}
        component={ProductCard}
      />
      <Stack.Screen
        name="Payment"
        options={{
          headerShown: false
          }}
        component={Payment}
      />
      <Stack.Screen
        name="ConfirmPayment"
        options={{
          headerShown: false
          }}
        component={ConfirmPayment}
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
    color: 'black', // You can set the text color here
  },
});

export default HistoryStackNavigators;
