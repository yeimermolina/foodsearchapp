import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";

export const SearchScreenStacks = createStackNavigator(
  {
    SearchRestaurants: {
      screen: SearchScreen,
      navigationOptions: () => ({
        title: "Search Restaurants"
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f8b195"
      },
      headerTintColor: "#ffffff"
    }
  }
);
