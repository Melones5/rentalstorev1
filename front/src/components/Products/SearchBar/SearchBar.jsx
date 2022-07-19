import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

const SearchBar = () => {
  return (
    <div className='search'>
      <div className="serchInputs">
        <Container>
          <Row>
            <Col>
              <input type='text' className='form-control mt-3 mx-auto' />
              <div className="serchIcon">
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default SearchBar