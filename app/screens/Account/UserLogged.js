import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Toast from "react-native-easy-toast";
import * as firebase from "firebase";
import Profile from "../../components/Account/Profile";
import Loading from "../../components/Loading";
import AccountOptions from "../../components/Account/AccountOptions";

export default function UserLogged() {
  const [profile, setProfile] = useState({});
  const [reloadData, setReloadData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading...");
  const toastRef = useRef();

  useEffect(() => {
    (async () => {
      try {
        const user = await firebase.auth().currentUser;
        setProfile(user.providerData[0]);
      } catch (e) {
        console.log(e);
      }
    })();
    setReloadData(false);
  }, [reloadData]);

  return (
    <View style={styles.container}>
      <Profile
        profile={profile}
        setReloadData={setReloadData}
        toastRef={toastRef}
        setLoading={setLoading}
        setLoadingText={setLoadingText}
      />
      <AccountOptions />
      <Button
        title="Log out"
        buttonStyle={styles.close}
        titleStyle={styles.closeTitle}
        onPress={() => firebase.auth().signOut()}
      />
      <Toast ref={toastRef} position="center" opacity={0.5} />
      <Loading text={loadingText} isVisible={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2"
  },
  close: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E3E3E3",
    borderBottomWidth: 1,
    borderBottomColor: "#E3E3E3",
    paddingTop: 10,
    paddingBottom: 10
  },
  closeTitle: {
    color: "#f67280"
  }
});
