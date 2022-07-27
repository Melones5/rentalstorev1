import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';


const SearchBar = () => {


  const [palabra, setPalabra] = useState('');
  const [opcion, setOpcion] = useState('');
  const [tipo, setTipo] = useState('');

  console.log("id del tipo: " + tipo)
  console.log("id del ordenar: " + opcion)


  return (
    <div className='search'>
      <div className="serchInputs">
        <Container className="container-search" fluid>
          <Row>
            {/* busca por categorías */}
            <Col className='pt-2' md="auto">
              <div>
                <select className="form-select" value={tipo} aria-label="Default select example" onChange={cat => setTipo(cat.target.value)}>
                  <option value="1">Artículos de playa</option>
                  <option value="2">Artículos de camping</option>
                  <option value="3">Artículos deportivos</option>
                  <option value="4">Herramientas</option>
                </select>
              </div>
            </Col>

            {/* ordena por nombre y precio */}
            <Col className='pt-2' md="auto">
              <div>
                <div>
                  <select className="form-select" value={opcion} aria-label="Default select example" onChange={opc => setOpcion(opc.target.value)}>
                    <option value="precio">Precio</option>
                    <option value="nombre">Nombre</option>
                  </select>
                </div>
              </div>
            </Col>
            
          </Row>

        </Container>
      </div>
    </div>
  )
}

export default SearchBar