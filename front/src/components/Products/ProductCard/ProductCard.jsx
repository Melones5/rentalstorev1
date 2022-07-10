import React from 'react'
import { Card, Button } from 'react-bootstrap'
import image1 from '../../../assets/silla.png'

const ProductCard = () => {
  return (
    <div className='container'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>

        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary">Go somewhere</Button>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default ProductCard