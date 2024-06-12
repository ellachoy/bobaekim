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
            <blockquote>
              I love seeing things through other objects.
              <br></br> 나는 사물을 투과해 보이는 것들을 사랑한다.
            </blockquote>
            <p>
              Between time and seasons, between objects, between moments of
              love... everything has gaps. Even in emotions, gaps always exist.
              I love those gaps. Sometimes, various emotions are contained
              within those gaps—longing, loneliness, affection. I want to
              capture and express them.
              <br></br>시간, 계절사이, 물건, 사랑의 사이,.. 모든 것에는 틈이
              존재한다. 하물며 감정에도 틈이란 것은 늘 존재하고 있다. 그 틈을
              나는 사랑한다. 때로는 그 틈에 여러 감정이 내포된다. 그리움,
              외로움, 사랑스러움. 그것들을 나는 그려내고자 한다.
            </p>
          </div>
        </div>
        <Navigation />
      </section>
    </>
  )
}
