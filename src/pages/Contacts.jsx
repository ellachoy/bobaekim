import React from 'react'
import emailjs from 'emailjs-com'
import Navigation from './components/Navigation'

const SERVICE_ID = 'service_g99nnij'
const TEMPLATE_ID = 'template_ekkusug'
const PUBLIC_KEY = 'Yuh5lLivA0Ntu8EVi'

export default function Contacts() {
  const handleOnSubmit = e => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      result => {
        console.log(result.text)
        alert('Message Sent Successfully')
      },
      error => {
        console.log(error.text)
        alert('Something went wrong!')
      }
    )
    e.target.reset()
  }
  return (
    <section className='section wrapper'>
      <div className='contact-form'>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor='from_name'>Name</label>
            <input
              type='text'
              id='from_name'
              name='from_name'
              placeholder='Your name..'
              required
            />
          </div>
          <div>
            <label>E-mail</label>
            <input
              type='email'
              id='from_email'
              name='from_email'
              placeholder='Your email..'
              required
            />
          </div>
          <div>
            <label for='message'>Message</label>
            <textarea
              name='message'
              rows='8'
              cols='30'
              placeholder='Your message..'
              required
            />
          </div>
          <input type='submit' value='Send' className='submit-button' />
        </form>
      </div>
      <Navigation />
    </section>
  )
}
