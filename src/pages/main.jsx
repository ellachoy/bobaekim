import Navigation from './components/Navigation'
import './styles/main.scss'
import TypeIt from 'typeit-react'

export default function Main() {
  return (
    <section className='section wrapper'>
      <h1 className='h1 intro'>
        <TypeIt
          options={{
            speed: 150,
            waitUntilVisible: true,
            cursor: false,
            lifeLike: true,
          }}
        >
          <span className='intro-first'>BOBAE</span> KIM
        </TypeIt>
      </h1>
      <Navigation />
    </section>
  )
}
