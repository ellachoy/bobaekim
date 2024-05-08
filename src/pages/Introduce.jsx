import React from 'react'
import foto1 from '../assets/5336.jpg'
import Navigation from './components/Navigation'

export default function Introduce() {
  return (
    <>
      <section className='section  wrapper'>
        <div className='introduce'>
          <div className='intro-image'>
            <img src={foto1} alt='' />
          </div>
          <div>
            <h2 className='h3'>Hello, iam Bobae Kim </h2>
            <blockquote>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat,
            </blockquote>
            <div style={{ 'margin-top': '88px' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </div>
          </div>
        </div>

        <Navigation />
      </section>
    </>
  )
}
