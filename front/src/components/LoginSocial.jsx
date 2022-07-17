import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged  } from 'firebase/auth';
import auth  from '../firebase-config';
import { async } from '@firebase/util';


const LoginSocial = () => {

  const [registroEmail, setRegistroEmail] = useState("");
  const [registroPassword, setRegistroPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [liginPassword, setLoginPassword] = useState("");

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (provider) => {
    setUser(provider);
  }) 

  const Registro = () => {

  }

  const Login = async() => {
    try {
      const user = await signInWithPopup(auth, provider);
      // if user !==null {}
        // axios.post("http://localhost:5000/cliente"
      console.log(user)
    } catch (error) {
      console.log(error)
    }
     
  } 

  const LogOut = async() => {
    try {
      await signOut(auth);
      localStorage.removeItem(user)
    } catch (error) {
      
    }
  }

  return (
    <div>
      <div>
        <h2 className='py-5'>Registar usuario</h2>
        <input type="text" placeholder='Email....' onChange={(event) => {setRegistroEmail(event.target.value);}}/>
        <input type="text" placeholder='Password' onChange={(event) => {setRegistroPassword(event.target.value);}}/>    
        <button>Crear usuario</button>
      </div>
      <div>
        <h2 className='py-5'>Login</h2>
        <input type="text" placeholder='Email....' onChange={(event) => {setLoginEmail(event.target.value);}}/>
        <input type="text" placeholder='Password' onChange={(event) => {setLoginEmail(event.target.value);}}/>    
        <button onClick={Login}>Crear usuario</button>
      </div>
      <h4>Usuario Logeado con google</h4>
      {user?.email}
      <button onClick={LogOut}> Sing out</button>
    </div>
  )
}

export default LoginSocial