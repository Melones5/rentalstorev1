import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
      const [productos, setProductos] = useState([])

      const addToCart = (nombre,precio,urlfoto,categoria,id,descripcion) => {
            setProductos((prevState) => [...prevState, {nombre,precio,urlfoto,categoria,id,descripcion}]);
      };

      return(
            <CartContext.Provider value={{ productos, addToCart}}>
                  {children}
            </CartContext.Provider>
      )
} 

export default CartContext;