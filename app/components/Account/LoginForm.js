import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import * as firebase from "firebase";
import { validateEmail } from "../../utils/Validations";
import Loading from "../Loading";

function LoginForm({ toastRef, navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      return toastRef.current.show("All fields are mandatory");
    }

    if (!validateEmail(email)) return toastRef.current.show("Invalid Email");

    setLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("Account");
    } catch (e) {
      toastRef.current.show("Cannot login user");
    }

    setLoading(false);
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email"
        containerStyle={styles.inputForm}
        onChangeText={e => setEmail(e)}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        placeholder="Password"
        containerStyle={styles.inputForm}
        onChangeText={e => setPassword(e)}
        password
        secureTextEntry={hidePassword}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Button
        title="Login"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnLogin}
        onPress={login}
      />
      <Loading isVisible={loading} text="Login user..." />
    </View>
  );
}

export default withNavigation(LoginForm);

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputForm: {
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
  btnLogin: {
    backgroundColor: "#f67280"
  }
});
