import React, { Fragment, useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios';

const Category = ({onChangeCategory}) => {
  return (
    <>
      <h4 className='text-center text-white'>Comprando</h4>
      <Container fluid>
        <Row>
          <Col>
            <select name="" id="" onChange={onChangeCategory}>
              <option value="1">Artículos de playa</option>
              <option value="2">Articulos de camping</option>
              <option value="3">Artículos deportivos</option>
              <option value="4">Herramientas</option>
            </select>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Category