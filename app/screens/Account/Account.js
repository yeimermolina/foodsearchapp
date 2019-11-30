import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

const Account = () => {
  const [logged, setLogged] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogged(false) : setLogged(true);
    });
  }, []);

  if (logged === null) {
    return <Loading isVisible text="Loading..." />;
  }

  return logged ? <UserLogged /> : <UserGuest />;
};

export default Account;
