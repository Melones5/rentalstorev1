import MUIDataTable from 'mui-datatables'
import React from 'react'

const columns = ["id", "Nombre", "Precio", "Descripcion", "Cantidad", "Estado", "Imagen", "Categoría"]
const data = []
const options = {}

const TablaProduct = () => {
  return (
   <MUIDataTable
      title={"Lista de productos"}
      data={data}
      columns={columns}
      options={options} 
   />
  )
}

export default TablaProduct