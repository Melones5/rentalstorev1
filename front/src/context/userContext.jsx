import { createContext, useEffect, useState, useContext } from "react";

import {
  createUserWithEmailAndPassword,
  updateEmail,
  updatePassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import auth from "../firebase-config";


const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

  //estado que seteo el usuario actual
  const [user, setUser] = useState({});

  //se crea el usuario en firebase (register user)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserEmail = (email) => {
    return updateEmail(auth, email);
  };

  const updateUserPassword = (password) => {
    return updatePassword(auth, password);
  };

  //se hace el login del usuario (usuario registrado previamente)
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  //logout del usuario, se lo elimina el estado global (usuario logeado previamente)
  const logout = () => {
    return signOut(auth);
  };

  //este useEffect se ejecuta en el mount del componente y setea el usuario ya logeado previamente al state actual
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser);
    })
    return () => {
      unsubscribe();
    }
  }, [])

  //envia valores necesarios para los demás componentes hijos puedan acceder y hacer uso de los mismos
  return (
    <UserContext.Provider value={{ createUser, updateUserEmail, updateUserPassword, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}

