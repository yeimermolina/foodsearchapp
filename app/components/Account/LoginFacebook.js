import React, { useState } from "react";
import { SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";
import { FacebookApi } from "../../utils/Social";
import Loading from "../Loading";

export default function LoginFacebook({ toastRef, navigation }) {
  const [loading, setLoading] = useState(false);

  const login = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FacebookApi.application_id,
      {
        permissions: FacebookApi.permissions
      }
    );

    if (type === "success") {
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      try {
        await firebase.auth().signInWithCredential(credentials);
        navigation.navigate("Account");
      } catch (e) {
        console.log(e);
        toastRef.current.show("Could not connect to Facebook");
      }
    } else {
      toastRef.current.show("Facebook login canceled");
    }
  };

  return (
    <>
      <SocialIcon
        title="Login with Facebook"
        button
        type="facebook"
        onPress={login}
      />
      <Loading isVisible={loading} text="Login with Facebook..." />
    </>
  );
}
