import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

export default function Profile({
  profile,
  setReloadData,
  toastRef,
  setLoading,
  setLoadingText
}) {
  const { photoURL, uid, displayName, email } = profile;
  const changeAvatar = async () => {
    const { permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (permissions.cameraRoll.status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });

      if (result.cancelled) {
        toastRef.current.show("You close gallery without selecting any image");
      } else {
        try {
          await uploadImage(result.uri, uid);
          updatePhotoUrl(uid);
        } catch (e) {
          toastRef.current.show("Error loading avatar");
        }
      }
    }

    if (permissions.cameraRoll.status === "denied") {
      toastRef.current.show("You need to accept camera permissions");
    }
  };

  const uploadImage = async (uri, imageName) => {
    setLoading(true);
    setLoadingText("Updating avatar");
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase
      .storage()
      .ref()
      .child(`avatar/${imageName}`);
    return ref.put(blob);
  };

  const updatePhotoUrl = async uid => {
    try {
      const result = await firebase
        .storage()
        .ref(`avatar/${uid}`)
        .getDownloadURL();

      await firebase.auth().currentUser.updateProfile({
        photoURL: result
      });

      setReloadData(true);
      setLoading(false);
    } catch (e) {
      toastRef.current.show("Error loading avatar");
    }
  };

  return (
    <View style={styles.profileContainer}>
      <Avatar
        rounded
        size="large"
        showEditButton
        onEditPress={changeAvatar}
        style={styles.avatar}
        source={{
          uri: photoURL
            ? photoURL
            : "https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png"
        }}
      />
      <View>
        <Text style={styles.name}>{displayName ? displayName : "You"}</Text>
        <Text>{email ? email : "You"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30
  },
  avatar: {
    marginRight: 20,
    width: 100,
    height: 100
  },
  name: {
    fontWeight: "bold"
  }
});
