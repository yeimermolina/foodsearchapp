import React, { useRef } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SignUpForm from "../../components/Account/SignUpForm";
import Toast from "react-native-easy-toast";

export default function SignUp() {
  const toastRef = useRef();
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "#f6f6f6" }}>
      <Image
        source={require("../../../assets/images/logo2.png")}
        style={styles.logo}
        resizeMode="center"
      />
      <SignUpForm toastRef={toastRef} />
      <Toast ref={toastRef} position="center" opacity={0.5} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  form: {
    marginLeft: 30,
    marginRight: 30
  }
});
