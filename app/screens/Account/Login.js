import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import Toast from "react-native-easy-toast";
import LoginForm from "../../components/Account/LoginForm";
import LoginFacebook from "../../components/Account/LoginFacebook";

export default function Login({ navigation }) {
  const toastRef = useRef();
  return (
    <ScrollView style={{ backgroundColor: "#f6f6f6" }}>
      <Image
        source={require("../../../assets/images/logo2.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.view}>
        <LoginForm toastRef={toastRef} />
        <CreateAccount navigation={navigation} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.view}>
        <LoginFacebook toastRef={toastRef} navigation={navigation} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.5} />
    </ScrollView>
  );
}

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
    backgroundColor: "#f67280",
    margin: 40,
    marginBottom: 10
  },
  signupText: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btnSignup: {
    color: "#f67280",
    fontWeight: "bold",
    marginLeft: 10
  }
});
