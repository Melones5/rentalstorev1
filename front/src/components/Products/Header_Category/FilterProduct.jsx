import React from 'react'

const FilterProduct = ({ filterValueSelected }) => {

  function onFilterValueChanged(e) {
    filterValueSelected(e.target.value)
  }

  return (
    <div>
      <select name='Categoria' className="form-select" onChange={onFilterValueChanged}>
        <option value="5">Todos</option>
        <option value="1">Artículos de playa</option>
        <option value="2">Artículos de camping</option>
        <option value="3">Artículos deportivos</option>
        <option value="4">Herramientas</option>
      </select>
    </div>
  )
}

export default FilterProduct