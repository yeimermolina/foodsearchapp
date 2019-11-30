import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "../screens/Account/Account";
import LoginScreen from "../screens/Account/Login";
import SignUpScreen from "../screens/Account/SignUp";

export const AccountScreenStacks = createStackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: () => ({
      title: "My Account"
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: "Login"
    })
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: "Sign Up"
    })
  }
});
