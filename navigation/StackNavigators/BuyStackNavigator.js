import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomerHomePage from '../../screens/Company';
import BuyerProductPage from '../../screens/BuyerProductPage';
import CompanyProductsPage from '../../screens/CompanyProductsPage';
import MyCart from '../../screens/MyCart';
import AddNewItem from '../../screens/AddNewItem';
import ProductDetailsAdd from '../../screens/ProductDetailsAdd';
import Payment from '../../screens/Payment';
import ConfirmPayment from '../../screens/ConfirmPayment';
const Stack = createNativeStackNavigator();


const BuyStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='CustomerHomePage'>
      <Stack.Screen name="CustomerHomePage" 
      options={{
        header: () => null,
      }}
      component={CustomerHomePage} />
      <Stack.Screen name="CompanyProductsPage" component={CompanyProductsPage} />
      <Stack.Screen name="ProductDetailsAdd" 
      options={{
        header: () => null,
      }}
      component={ProductDetailsAdd} />
      <Stack.Screen name="MyCart"
      options={{
        header: () => null,
      }}
       component={MyCart} />
       <Stack.Screen name="Payment"
      options={{
        header: () => null,
      }}
       component={Payment} />
      <Stack.Screen
      name="ConfirmPayment"
      component={ConfirmPayment}
      options={{
        header: () => null,
      }}
      />
      <Stack.Screen name="BuyerProductPage"
      options={{
        header: () => null,
      }}
       component={BuyerProductPage} />
       <Stack.Screen name="AddNewItem"
      options={{
        header: () => null,
      }}
       component={AddNewItem} />
    </Stack.Navigator>
  );
};

export default BuyStackNavigator;