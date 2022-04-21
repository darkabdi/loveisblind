import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="App-header">
            <nav>
    
            <Link to="/"><h1 className='header-text'>DOUBLE-T PRODUCTIONS</h1></Link>
     
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/login">Login</Link></li>
            <li> <Link to="/profile">Profile</Link></li>
        </ul>
    </nav>
      <div className="hero-image">
    <div className="hero-text">
    </div>

  </div>

      </header>
  )
}

export default Header