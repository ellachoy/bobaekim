import React from 'react'

export default function ImageList({ item }) {
  return (
    <div className='gallery'>
      {item.map(({ id, url, category }) => (
        <div key={id}>
          <img src={url} alt={category} />
        </div>
      ))}
    </div>
  )
}
