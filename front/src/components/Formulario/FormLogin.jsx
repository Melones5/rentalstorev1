import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';


import axios from "axios";
import { useNavigate } from 'react-router-dom';


import './Form.css';



const FormLogin = () => {

  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    } else if (e.target.name === 'error') {
      setError(e.target.value)
    }
  };


  const { register, handleSubmit, watch, formState: { errors } } = useForm(
    {
      defaultValues: {
        email: '',
        password: '',
      }
    });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', data)
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

      });
  }



  return (
    <div>
      <h1 className='pt-5 form-h1'>Acceder</h1>
      <h5 className='form-h5'>¡Si tiene una cuenta, acceda!</h5>
      <form className='form-container-login' autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className='label-contact'>Dirección de E-mail:*</label>
          <input className='form-control my-2' type="text" name='email' onChange={handleChange} {...register('email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })} />
          {errors.email?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo email es requerido</p>}
          {errors.email?.type === 'pattern' && <p className='text-danger text-small d-block mb-2'>El formato del email es incorrecto</p>}
        </div>
        <div className='mb-4'>
          <label className='label-contact'>Contraseña:*</label>
          <input className='form-control my-2' type="text" name='password' onChange={handleChange} {...register('password', {
            required: true,
            minLength: {
              value: 4,
            }
          })} />
          {errors.password?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo contraseña es requerido</p>}
          {errors.password?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>La contraseña debe tener al menos 4 letras</p>}
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