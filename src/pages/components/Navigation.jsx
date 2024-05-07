import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className='wrapper'>
      <ul>
        <li>
          {' '}
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
  )
}
