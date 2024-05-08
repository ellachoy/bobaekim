import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({ active }) {
  return (
    <>
      <nav className='wrapper show-nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Introduce'>Introduce</Link>
          </li>
          <li>
            <Link to='/Works'>Works</Link>
          </li>
          <li>
            <Link to='/Contacts'>Contacts</Link>
          </li>
        </ul>
      </nav>
      <div class='line'></div>
    </>
  )
}
