import React, { useState } from 'react'

import { UserAuth } from '../../context/userContext'

import { useNavigate, Link } from 'react-router-dom'

export const FormLoginFire = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { createUser, signIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmitLogin = async(e) =>{
    e.preventDefault()
    setError('')
    try {
      await signIn(email,password)
      navigate('/account')
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }
  }

  const handleSubmitRegister = async(e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email,password)
      navigate('/account')
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }
  }

  return (
   <>
    <div>
      <h1>Registrarse</h1>
    </div>
    <form onSubmit={handleSubmitRegister}>
      <div>
        <label htmlFor="">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="text" />
      </div>
      <button>Registrarse</button>
    </form>
    <div>
      <h1>Iniciar sesión</h1>
    </div>
    <form onSubmit={handleSubmitLogin}>
      <div>
        <label htmlFor="">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="text" />
      </div>
      <button>Login</button>
    </form>
   </>
  )
}


export default FormLoginFire;