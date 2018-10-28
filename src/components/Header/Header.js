import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav style={{ textAlign: 'center' }}>
        <Link to="/" style={{ padding: 10 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 10 }}>
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header
