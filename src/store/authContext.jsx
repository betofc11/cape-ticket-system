import React, { createContext, useState, useEffect } from "react";
import firebase from "../../firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const auth = getAuth(firebase);
const firestore = getFirestore(firebase);

const USER_INITIALIZER = {
  name: "",
  email: "",
};

const AuthContext = createContext({
  isLoggedIn: false,
  user: USER_INITIALIZER,
  logIn: () => {},
  logOut: () => {},
});

const { Provider, Consumer } = AuthContext;

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(USER_INITIALIZER);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        getRole(user.uid).then((res) => {
          if (res === "admin") {
            setUser({
              name: user.displayName,
              email: user.email,
            });
            setIsLoggedIn(true);
          } else {
            signOut(auth);
            setIsLoggedIn(false);
            setUser(USER_INITIALIZER);
          }
        });
      }
    });

    return authUser;
  }, []);

  const logIn = async ({ email, password }) => {
    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    try {
      signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const getRole = async (uid) => {
    const rolRef = doc(firestore, `roles/${uid}`);
    const roleCifred = await getDoc(rolRef);
    const role = roleCifred.data();
    return role.role;
  };

  const values = {
    isLoggedIn,
    user,
    logIn,
    logOut,
  };

  return <Provider value={values}>{children}</Provider>;
};

export default AuthContext;
export { Consumer, AuthContextProvider as Provider };
