import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";

function UserGuest({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check your profile</Text>
      <Text style={styles.description}>
        How would you describe your best restaurant
      </Text>
      <View style={styles.btnContainerView}>
        <Button
          buttonStyle={styles.btn}
          containerStyle={styles.btnContainer}
          title="Check my Profile"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}

export default withNavigation(UserGuest);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#f6f6f6",
    flex: 1
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    color: "#f67280"
  },
  description: {
    fontSize: 16,
    textAlign: "center"
  },
  btnContainerView: {
    alignItems: "center"
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#f67280"
  },
  btnContainer: {
    width: "70%"
  }
});
