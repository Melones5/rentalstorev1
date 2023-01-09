import React from 'react'

const FilterPrice = ( {filterValueSelected} ) => {

  function onFilterValueChanged(e){
    filterValueSelected(e.target.value)
  }


  return (
    <div>
      <select name='Categoria' className="form-select" onChange={onFilterValueChanged}>
        <option value="1">Mayor precio</option>
        <option value="2">Menor precio</option>
      </select>
    </div>
  )
}

export default FilterPrice