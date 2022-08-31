import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importamos los diferentes componentes para las routes
import Header from './components/Header/Header.jsx';
import Home from './components/Header/Home';
import Contact from './components/Header/Contact';
import Login from './components/Header/Login';
import LoginSocial from './components/LoginSocial.jsx';
import Account from './components/User/Account.jsx';
import ProductosEnAlquiler from './components/User/ProductosEnAlquiler';
import ProductDetail from './components/Products/ProductDetail.jsx';
import Footer from './components/Footer/Footer.jsx';
import Cart from './components/Products/Cart.jsx';
import Error404 from './components/Error404.jsx';



//Provider y protected route
import { CartProvider } from './CartContext';
import { AuthContextProvider } from './context/userContext';
import ProtectecRoute from './components/ProtectecRoute.js';



function App() {
  return (
    <AuthContextProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <main className='py-3'>
            <Container>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/login" exact element={<Login />} />

                {/* Acá agregué el detalle del producto a ver si anda */}
                <Route path='/product-detail/:id_producto' exact element={<ProductDetail />} />

                {/* <Route path="/loginsocial" exact element={ <LoginSocial />} /> */}

                {/* rutas protegidas */}
                <Route path="/account" exact element={
                  <ProtectecRoute>
                    <Account />
                  </ProtectecRoute>}
                />

                <Route path='/productos_alquiler' exact element={
                  <ProtectecRoute>
                    <ProductosEnAlquiler />
                  </ProtectecRoute>
                }
                />

                <Route path="/cart" exact element={<Cart />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </Container>
          </main>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
