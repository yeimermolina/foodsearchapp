import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";

function UserGuest({ navigation }) {
  return (
    <ScrollView style={styles.container} centerContent>
      <Image
        source={require("../../../assets/images/user-guest.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
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
    </ScrollView>
  );
}

export default withNavigation(UserGuest);

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30
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
    marginBottom: 10
  },
  description: {
    fontSize: 20,
    textAlign: "center"
  },
  btnContainerView: {
    flex: 1,
    alignItems: "center"
  },
  btn: {
    backgroundColor: "#00a680"
  },
  btnContainer: {
    width: "70%"
  }
});
