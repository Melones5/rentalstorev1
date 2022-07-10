import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header.jsx';
import Home from './components/Header/Home';
import About from './components/Header/About';
import Contact from './components/Header/Contact';
import Login from './components/Header/Login';
import Register from './components/Header/Register';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
      <Container>
          <Routes>
            <Route path="/" exact element={ <Home /> } />
            {/* <Route path="/about" element={ <About /> } /> */}
            <Route path="/contact" exact element={ <Contact /> } />
            {/* <Route path="/register" element={ <Register /> } /> */}
            <Route path="/login" exact element={ <Login />} />
            {/* <Route path="*" element={<NoMatch />} />  */}
          </Routes>
      </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
