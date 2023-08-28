import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/LandingScreen";
import LogIn from "../screens/LogIn";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import AddFarm from "../screens/AddNewItem";
import CompanyPage from "../screens/CompanyPage";
import Settings from "../screens/Settings";
import Weather from "../screens/Weather";
import Theme from "../screens/Theme";
import ForgotPassword from "../screens/ForgotPassword";
import ProductPage from "../screens/ProductPage";
import HamburgerMenu from "../screens/HamburgerMenu";
import ProductCard from "../screens/ProductCard";
import SignUpCompletion from "../screens/SignUpCompletion";
import MyCart from "../screens/MyCart";
import OrderHistory from "../screens/OrderHistory";
import Search from "../screens/Search";
import Cart from "../screens/Cart";
import SellerDisplayPage from "../screens/SellerDisplayPage";
import BuyerProductPage from "../screens/BuyerProductPage";
// import CompanyBuyerPage from "../screens/Company";
import CustomerHomePage from "../screens/Company";
import CompanyProductsPage from "../screens/CompanyProductsPage";
import CustomerOrderHistory from "../screens/CustomerOrderHistory";
import ProductDetails from "../screens/ProductDetailsEdit";
import AuthenticationScreen from "../screens/AuthenticationScreen";
import AuthStackNavigators from "./StackNavigators/AuthStackNavigators";
import { NavigationContainer } from "@react-navigation/native";
import MainTab from "./TabNavigators/MainTab";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Stack = createNativeStackNavigator();


const RootNavigator = () => {
  const {userLoggedIn} = useContext(UserContext);
  
  return (<>
    <NavigationContainer>
      { !userLoggedIn?
       <AuthStackNavigators />:
       <MainTab />
      }
    </NavigationContainer>
      </>
  );
};

export default RootNavigator;
