import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as firebase from "firebase";
import Loading from "../../components/Loading";

const Account = () => {
  const [logged, setLogged] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogged(false) : setLogged(true);
    });
  }, []);

  if (logged === false) {
    return <Loading isVisible text="Loading..." />;
  }

  if (logged) {
    return (
      <View>
        <Text>Account, loegueado</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Account, no loegueado</Text>
    </View>
  );
};

export default Account;
