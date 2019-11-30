import { createStackNavigator } from "react-navigation-stack";
import TopRestaurantsScreen from "../screens/TopRestaurants";

export const TopRestaurantsScreenStacks = createStackNavigator({
  TopRestaurants: {
    screen: TopRestaurantsScreen,
    navigationOptions: () => ({
      title: "Top Restaurants"
    })
  }
});
