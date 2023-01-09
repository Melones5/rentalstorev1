import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
      const [productos, setProductos] = useState(JSON.parse(localStorage.getItem("productos")) || [])

      const addToCart = (nombre,precio,urlfoto,categoria,id,descripcion,cantidad) => {
            setProductos((prevState) => [...prevState, {nombre,precio,urlfoto,categoria,id,descripcion, cantidad}]);
            localStorage.setItem("productos", JSON.stringify([...productos, {nombre,precio,urlfoto,categoria,id,descripcion,cantidad}]))
      };

      return(
            <CartContext.Provider value={{ productos, addToCart}}>
                  {children}
            </CartContext.Provider>
      )
} 

export default CartContext;