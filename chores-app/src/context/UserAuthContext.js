import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const userAuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [familyID, setFamilyID] = useState();

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setUser(currentuser.uid);
        console.log("firebase user:", currentuser.uid);
      } else {
        setUser(null);
        console.log("firebase user:", null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ user, familyID, setFamilyID, logIn, signUp, logOut }}
    >
      {children}
    </userAuthContext.Provider>
  );
};

export function useUserAuth() {
  return useContext(userAuthContext);
}
