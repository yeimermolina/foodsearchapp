import { createStackNavigator } from "react-navigation-stack";
import RestaurantsScreen from "../screens/Restaurants";

export const RestaurantsScreenStacks = createStackNavigator(
  {
    Restaurants: {
      screen: RestaurantsScreen,
      navigationOptions: () => ({
        title: "Restaurants"
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
