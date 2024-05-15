import React from 'react'
import Data from '../data/images'

export default function Filter({ filterItem, setItem, menuItems }) {
  return (
    <div className='image-filter'>
      <ul>
        {menuItems.map((Val, id) => (
          <button
            className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'
            onClick={() => filterItem(Val)}
            key={id}
          >
            {Val}
          </button>
        ))}
        <button onClick={() => setItem(Data)}>All</button>
      </ul>
    </div>
  )
}
