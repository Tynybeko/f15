import React from 'react'
import { Link, NavLink } from 'react-router'

const navLinks = [
  {
    id: 1,
    href: '/',
    title: 'Home'
  },
  {
    id: 2,
    href: '/about',
    title: 'About'
  },
  {
    id: 4,
    href: '/about/info',
    title: 'Info'
  },
]

export default function Header() {

  return (
    <header className='flex w-full justify-between items-center py-5 px-3 bg-red-200'>
      <h2>
        HEADER

      </h2>
      <nav className='flex gap-2 header-nav'>
        {
          navLinks.map(el => (
            <NavLink key={el.id} className={({ isActive }) => {
              let initial = `border-b-2 `
              if (isActive) return initial + `border-red-300`
              return initial + ' border-blue-300'
            }} to={el.href}>{el.title}</NavLink>
          ))
        }


      </nav>
    </header>
  )
}
