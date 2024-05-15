import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <nav className='wrapper show-nav'>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Introduce'
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Introduce
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Works'
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Contacts'
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='line'></div>
    </>
  )
}
