import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Navigation from './components/Navigation'

export default function Contacts() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_g99nnij',

        form.current,
        'service_g99nnij'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }
  return (
    <section className='section wrapper'>
      <div className='contact-form'>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Name</label>
            <input type='text' name='user_name' />
          </div>
          <div>
            <label>Email</label>
            <input type='email' name='user_email' />
          </div>
          <div>
            <label>Message</label>
            <textarea name='message' />
          </div>
          <input type='submit' value='Send' className='submit-button' />
        </form>
      </div>
      <Navigation />
    </section>
  )
}
