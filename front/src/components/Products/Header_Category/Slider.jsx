import React from 'react'
import { Carousel } from 'react-bootstrap'
import './index.css';

import img1 from '../../../assets/slider1.jpg'
import img2 from '../../../assets/slider2.jpg'
import img3 from '../../../assets/slider3.jpg'
import img4 from '../../../assets/slider4.jpg'

const Slider = () => {
  return (
    <Carousel fade className='carousel-slider'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
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
    </Carousel>
  )
}

export default Slider