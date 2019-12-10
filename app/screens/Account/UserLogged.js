import React, { useEffect, useState, useRef } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import Toast from "react-native-easy-toast";
import * as firebase from "firebase";
import Profile from "../../components/Account/Profile";
import Loading from "../../components/Loading";

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
    <View>
      <Profile
        profile={profile}
        setReloadData={setReloadData}
        toastRef={toastRef}
        setLoading={setLoading}
        setLoadingText={setLoadingText}
      />
      <Button title="Log out" onPress={() => firebase.auth().signOut()} />
      <Toast ref={toastRef} position="center" opacity={0.5} />
      <Loading text={loadingText} isVisible={loading} />
    </View>
  );
}
