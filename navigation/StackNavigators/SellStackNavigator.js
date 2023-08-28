import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomerHomePage from "../../screens/Company";
import BuyerProductPage from "../../screens/BuyerProductPage";
import CompanyProductsPage from "../../screens/CompanyProductsPage";
import MyCart from "../../screens/MyCart";
import AddNewItem from "../../screens/AddNewItem";
import SellerDisplayPage from "../../screens/SellerDisplayPage";
import ProductDetailsEdit from "../../screens/ProductDetailsEdit";
import EditItem from "../../screens/EditItem";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
const Stack = createNativeStackNavigator();

const SellStackNavigator = () => {
  const { user } = useAuth();
  const { userData } = useUser(user?.uid);
  return (
    <Stack.Navigator
      initialRouteName={
        userData.accountType === "Customer"
          ? CustomerHomePage
          : SellerDisplayPage
      }
    >
      <Stack.Screen
        name="SellerDisplayPage"
        options={{
          header: () => null,
        }}
        component={SellerDisplayPage}
      />
      <Stack.Screen
        name="CustomerHomePage"
        options={{
          header: () => null,
        }}
        component={CustomerHomePage}
      />
      <Stack.Screen
        name="CompanyProductsPage"
        component={CompanyProductsPage}
      />

      <Stack.Screen
        name="ProductDetailsEdit"
        options={{
          header: () => null,
        }}
        component={ProductDetailsEdit}
      />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen
        name="BuyerProductPage"
        options={{
          header: () => null,
        }}
        component={BuyerProductPage}
      />
      <Stack.Screen
        name="AddNewItem"
        options={{
          header: () => null,
        }}
        component={AddNewItem}
      />
      <Stack.Screen
        name="EditItem"
        options={{
          header: () => null,
        }}
        component={EditItem}
      />
    </Stack.Navigator>
  );
};

export default SellStackNavigator;
