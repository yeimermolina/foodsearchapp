import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";

function CreateAccount({ navigation }) {
  return (
    <Text style={styles.signupText}>
      Don't have an account?
      <Text
        style={styles.btnSignup}
        onPress={() => navigation.navigate("SignUp")}
      >
        Sign Up
      </Text>
    </Text>
  );
}

export default function Login({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#f6f6f6" }}>
      <Image
        source={require("../../../assets/images/logo2.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.view}>
        <Text>Login Form</Text>
        <CreateAccount navigation={navigation} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.view}>
        <Text>Login Facebook</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  view: {
    marginRight: 40,
    marginLeft: 40
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40
  },
  signupText: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btnSignup: {
    color: "#00a680",
    fontWeight: "bold",
    marginLeft: 10
  }
});
