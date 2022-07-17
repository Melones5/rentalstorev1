import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header.jsx';
import Home from './components/Header/Home';
import Contact from './components/Header/Contact';
import Login from './components/Header/Login';
import LoginSocial from './components/LoginSocial.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartProvider} from './CartContext';
import Cart from './components/Products/Cart.jsx';
import Error404 from './components/Error404.jsx';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Header />
      <main className='py-3'>
      <Container>
          <Routes>
            <Route path="/" exact element={ <Home /> } />
            <Route path="/contact" exact element={ <Contact /> } />
            <Route path="/login" exact element={ <Login />} />
            <Route path="/loginsocial" exact element={ <LoginSocial />} />
            <Route path="/cart" exact element ={ <Cart />} />
            <Route path="*" element={<Error404 />} /> 
          </Routes>
      </Container>
      </main>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
