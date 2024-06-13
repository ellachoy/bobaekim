import React from 'react'
import artist from '../assets/artistFoto.jpeg'
import Navigation from './components/Navigation'

export default function Introduce() {
  return (
    <>
      <section className='section  wrapper'>
        <div className='introduce'>
          <div>
            <img src={artist} alt='artist-foto' />
          </div>
          <div className='intro-block'>
            <h2 className='h3'>Hello, i am Bobae Kim </h2>
            <blockquote>I love seeing things through other objects.</blockquote>
            <p>
              Between time and seasons, between objects, between moments of
              love... everything has gaps. Even in emotions, gaps always exist.
              I love those gaps. Sometimes, various emotions are contained
              within those gaps—longing, loneliness, affection. I want to
              capture and express them.
            </p>
          </div>
        </div>
        <Navigation />
      </section>
    </>
  )
}
