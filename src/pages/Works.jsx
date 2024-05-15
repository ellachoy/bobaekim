import React, { useState, useEffect } from 'react'

import Navigation from './components/Navigation'
import Images from './data/images'

import Loading from './components/Loading'

export default function Works() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <section className='section works wrapper'>
          <div className='image-filter'>
            <ul>
              <button>My Muse</button>
              <button>Reflection</button>
              <button>For Frinds</button>
              <button>Glass Series </button>
              <button>All</button>
            </ul>
          </div>
          <div className='gallery'>
            {Images.map(({ id, url }) => (
              <div key={id}>
                <img src={url} alt='arts' />
              </div>
            ))}
          </div>

          <Navigation />
        </section>
      )}
    </>
  )
}
