import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import swal from 'sweetalert';

import { UserAuth } from '../../context/userContext'

import axios from "axios";
import { useNavigate } from 'react-router-dom';


import './Form.css';



const FormLogin = () => {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signIn } = UserAuth();


  const { register, handleSubmit, watch, formState: { errors } } = useForm(
    {
      defaultValues: {
        email: '',
        password: '',
      }
    });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setError('')
    console.log("Evento e", e)
    console.log("data", data)
    try {
      await signIn(data.email, data.password)
      //axios.post('http://localhost:5000/login', data)
      swal({
        title: "Usuario",
        text: "Usuario logeado de manera correcta",
        icon: "success",
        button: "Aceptar",
      });
      navigate('/account')
    } catch (error) {
      swal({
        title: "Usuario",
        text: "Correo o contraseña incorrecto",
        icon: "error",
        button: "Aceptar"
      });
      setError(error.message)
      console.log(error.message)
    }

    
    //previo
    /*axios.post('http://localhost:5000/login', data)
    .then(function (response) {
      console.log('primer console',data);
      console.log('SeGUNDO console',response);
      //console.log(response);
      localStorage.setItem('token', response.data);
      navigate('/');
      //this.props.history.push('/');
      alert('Login Successful');

    })
      .catch(function (error) {
        console.log(error);
        handleChange({ target: { name: 'error', value: 'Credenciales inválidas' } });
      });*/
  }


  return (
    <div>
      <h1 className='pt-5 form-h1'>Acceder</h1>
      <h5 className='form-h5'>¡Si tiene una cuenta, acceda!</h5>
      <form className='form-container-login' autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className='label-contact'>Dirección de E-mail:*</label>
          <input className='form-control my-2' type="text" onChange={(e) => setEmail(e.target.value)} {...register('email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })} />
          {errors.email?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo email es requerido</p>}
          {errors.email?.type === 'pattern' && <p className='text-danger text-small d-block mb-2'>El formato del email es incorrecto</p>}
        </div>
        <div className='mb-4'>
          <label className='label-contact'>Contraseña:*</label>
          <input className='form-control my-2' type="password" onChange={(e) => setPassword(e.target.value)} {...register('password', {
            required: true,
            minLength: {
              value: 6,
            }
          })} />
          {errors.password?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo contraseña es requerido</p>}
          {errors.password?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>La contraseña debe tener al menos 6 letras</p>}
        </div>
        <div className='mb-4'>
          <a className='text-white' href='#olvido'>¿Olvido su contraseña?</a>
        </div>
        <div className='d-flex justify-content-between'>
          <Button type="submit" className='login-button'>Logearte</Button>
        </div>
        <hr />
        <p className='text-center label-contact'>
          Logeate con tus redes sociales
        </p>
        <div className='d-flex flex-row mb-3 justify-content-center social-media'>
          <Button className='social-icon facebook'>
            <FaFacebookF />
          </Button>
          <Button className='social-icon google'>
            <FaGoogle />
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormLogin