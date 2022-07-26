import React from 'react'
import Table from 'react-bootstrap/Table';

const ProductosEnAlquiler = () => {
  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Descripcion</th>
          <th>Estado</th>
          <th>Calificacion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>300</td>
          <td>50</td>
          <td>Sombrilla para playa, buena calidad</td>
          <td>Nueva</td>
          <td>0</td> 
          <button>eliminar</button>
          <button>editar</button>         
        </tr>
      </tbody>
      </Table>
    </div>
  )
}

export default ProductosEnAlquiler