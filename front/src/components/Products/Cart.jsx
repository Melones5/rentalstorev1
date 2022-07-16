import React from 'react'
import { useContext } from 'react'
import CartContext from '../../CartContext'

const Cart = () => {
  const { productos } = useContext(CartContext);
  return (
    <div>
      <h2>Carrito</h2>
      <div>
        {productos.map((producto)=>(
          <div>
            <img src={producto.urlfoto} alt=""/>
            <h2>{producto.categoria}</h2>
            <h2>{producto.id}</h2>
            <h2>{producto.nombre}</h2>
            <h2>{producto.descripcion}</h2>
            <h2>{producto.precio}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart