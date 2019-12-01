import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { RestaurantsScreenStacks } from "./RestaurantsStacks";
import { TopRestaurantsScreenStacks } from "./TopRestaurantsStacks";
import { SearchScreenStacks } from "./SearchStacks";
import { AccountScreenStacks } from "./AccountStacks";

const NavigationStacks = createBottomTabNavigator(
  {
    Restaurants: {
      screen: RestaurantsScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Restaurants",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="food"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    TopRestaurants: {
      screen: TopRestaurantsScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Top",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="star-outline"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    SearchRestaurants: {
      screen: SearchScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Account: {
      screen: AccountScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Account",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="account"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Account",
    order: ["Restaurants", "TopRestaurants", "SearchRestaurants", "Account"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#f67280"
    }
  }
);

export default createAppContainer(NavigationStacks);
