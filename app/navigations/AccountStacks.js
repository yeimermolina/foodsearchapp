import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "../screens/Account";

export const AccountScreenStacks = createStackNavigator({
  SearchRestaurants: {
    screen: AccountScreen,
    navigationOptions: () => ({
      title: "My Account"
    })
  }
});
