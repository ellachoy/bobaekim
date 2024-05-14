import React from 'react'
import foto1 from '../assets/5336.jpg'

import Navigation from './components/Navigation'

export default function Introduce() {
  return (
    <>
      <section className='section  wrapper'>
        <div className='introduce'>
          <image className='intro-image'>
            <img src={foto1} alt='intro-foto' />
          </image>
          <div>
            <h2 className='h3'>Hello, i am Bobae Kim </h2>
            <blockquote>
              I enjoy looking at objects through other objects
            </blockquote>
            <p>
              When I bid farewell to the person I loved most and received the
              gift of being able to love someone else, my story began. I cherish
              the moments when longing reveals purity and remember earnestly
              when sorrow transforms into grace. I hope to have the strength to
              offer my shoulder to someone unfamiliar with my story and to be
              able to generously embrace each other's wounds at times!
            </p>
          </div>
        </div>

        <Navigation />
      </section>
    </>
  )
}
