import React from 'react'
import { ExternalLink } from 'react-external-link'
import { MdAlternateEmail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
export default function Contact() {
  return (
    <aside className='contacts'>
      <ExternalLink href='mailto:maybobae@naver.com' className='contact'>
        <MdAlternateEmail className='icon' />
      </ExternalLink>
      <ExternalLink
        href='https://www.linkedin.com/in/ellachoy/'
        className='contact'
      >
        <FaFacebook className='icon' />
      </ExternalLink>
    </aside>
  )
}
