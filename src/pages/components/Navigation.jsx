import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation({ active }) {
  return (
    <>
      <nav className='wrapper show-nav'>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/Introduce' activeClassName='active'>
              Introduce
            </NavLink>
          </li>
          <li>
            <NavLink to='/Works' activeClassName='active'>
              Works
            </NavLink>
          </li>
          <li>
            <NavLink to='/Contacts' activeClassName='active'>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <div class='line'></div>
    </>
  )
}
