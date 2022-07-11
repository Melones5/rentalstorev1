import React from 'react';
import { useForm } from 'react-hook-form';
import { edadValidator } from './validators';

const FormLogin = () => {

  const { register, handleSubmit, formState: { errors}, watch } = useForm(
    {
      defaultValues: {
        nombre: '',
        apellido: '',
        email: '',
        edad: '',
        telefono: '',
      }
  });

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  }

  const incluirTelefono = watch('incluirTelefono');


  return (
    <div>
      <h2>Formulario</h2>
      <p>Nombre: {watch('nombre')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input type="text" {...register('nombre', {
            required: true,
            maxLength:10
          })}/>
          {errors.nombre?.type === 'required' &&  <p className='bg-danger'>El campo nombre debe tener menos de 10 caracteres</p>}
          {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" {...register('apellido',{
            required:true,
            maxLength:10
          })}/>
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register('email',{
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })}/>
          {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
        </div>
        <div>
          <label>Edad</label>
          <input type="text" {...register('edad', {
            validate: edadValidator
          })}/>
          {errors.edad && <p>La edad debe estar entre 18 y 65 años</p>}
        </div>
        <div>
          <label>Pais</label>
          <select {...register('pais')}>
            <option value="es">España</option>
            <option value="it">Italia</option>
            <option value="fr">Francia</option>
          </select>
        </div>
        <div>
          <label>¿Incluir teléfono?</label>
          <input type="checkbox" {...register('incluirTelefono')} />
        </div>
        { incluirTelefono && (
           <div>
           <label>¿Incluir teléfono?</label>
           <input type="text" {...register('telefono')} />
         </div>
        )}
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default FormLogin;