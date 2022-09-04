import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './index.css';

import img1 from '../../../assets/slider1.jpg'
import img2 from '../../../assets/slider2.jpg'
import img3 from '../../../assets/slider3.jpg'
import img4 from '../../../assets/slider4.jpg'
import img5 from '../../../assets/slider5.webp'
import img6 from '../../../assets/slider6.jpg'
import img7 from '../../../assets/slider7.jpg'


const Slider = () => {
  return (
    <Container>
      <Carousel fade className='carousel-slider'>
        <Carousel.Item>
          <img
            className="d-block w-100 img-prueba"
            src={img6}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Artículos para acampar</h3>
            <p>Encontrá los mejores artículos para camping</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Herramientas</h3>
            <p>Encontrá las mejores herramientas para tus proyectos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Equipos de deporte</h3>
            <p>Encontrá los mejores equipos de deporte</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Artículos de playa</h3>
            <p>Encontrá los mejores artículos para la playa</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Slider