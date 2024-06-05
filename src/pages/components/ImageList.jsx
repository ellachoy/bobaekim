import React from 'react'
import Fancybox from './Fancybox'

export default function ImageList({ item }) {
  return (
    <div className='gallery'>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        {item.map(({ id, url, category }) => (
          <a key={id} href={url} data-fancybox='gallery'>
            <img src={url} alt={category} />
          </a>
        ))}
      </Fancybox>
    </div>
  )
}
