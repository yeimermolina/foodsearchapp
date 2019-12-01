import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { withNavigation } from "react-navigation";
import * as firebase from "firebase";
import { validateEmail } from "../../utils/Validations";
import Loading from "../Loading";

function SignUpForm({ toastRef, navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async () => {
    if (!email || !password || !confirmPassword) {
      return toastRef.current.show("All fields are mandatory");
    }

    if (password !== confirmPassword)
      return toastRef.current.show("Password must match");

    if (!validateEmail(email)) return toastRef.current.show("Invalid Email");

    setLoading(true);
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate("Account");
    } catch (e) {
      toastRef.current.show("Cannot create account");
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        onChangeText={e => setEmail(e)}
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        placeholder="Password"
        onChangeText={e => setPassword(e)}
        password
        secureTextEntry={hidePassword}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Input
        placeholder="Confirm Password"
        onChangeText={e => setConfirmPassword(e)}
        password
        secureTextEntry={hideConfirmPassword}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={hideConfirmPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
          />
        }
      />
      <Button
        title="Register"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnRegister}
        onPress={register}
      />
      <Loading isVisible={loading} text="Creating Account..." />
    </View>
  );
}

export default withNavigation(SignUpForm);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30
  },
  input: {
    width: "100%",
    marginTop: 20
  },
  icon: {
    color: "#f67280"
  },
  btnContainer: {
    marginTop: 20,
    width: "95%"
  },
  btnRegister: {
    backgroundColor: "#f67280"
  }
});
