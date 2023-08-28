import React, { useContext } from "react";
import LandingScreen from "../../screens/LandingScreen";
import LogIn from "../../screens/LogIn";
import CreateAccountScreen from "../../screens/CreateAccountScreen";
import SignUpCompletion from "../../screens/SignUpCompletion";
import AuthenticationScreen from "../../screens/AuthenticationScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackNavigator from "./BuyStackNavigator";
import ForgotPassword from "../../screens/ForgotPassword";
import { UserContext } from "../../contexts/UserContext";

const Stack = createNativeStackNavigator();
const AuthStackNavigators = () => {
  const { previouslyLoggedIn } = useContext(UserContext);
  return (
    <Stack.Navigator
      initialRouteName={previouslyLoggedIn ? "Login" : "Landing"}
    >
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LogIn}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={CreateAccountScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="SignUpCompletion"
        component={SignUpCompletion}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="EmailVerification"
        component={AuthenticationScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigators;
