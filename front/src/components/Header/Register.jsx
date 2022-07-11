import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './Register.css';

const Register = () => {
  return (
    <div>Register
      
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <hr />
        <p className='text-center'>
          Logeate con tus redes sociales
        </p>
        <div className='d-flex flex-row mb-3 justify-content-center social-media'>
          <Button className='social-icon facebook'>
            <FontAwesomeIcon icon={faFacebook}/><FontAwesomeIcon />
          </Button>
          <Button className='social-icon google'>
            <FontAwesomeIcon icon={faGoogle}/><FontAwesomeIcon />
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Register