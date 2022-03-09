import React from 'react'

// style sheet
import '../../style/Header.css'

// nav logo

import navLogo from '../../images/janghanilogo.jpg'

// material Icons


const Header = () => {
  return (
    <div className='main-Header'>
        <header>
        <nav className="navbar shadow-sm navbar-expand-lg">
          <div className="container">
          <a className="navbar-brand" href="/">
              <img src={navLogo} className='img-fluid' width={200} alt='nav-logo'/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fas fa-bars navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
        </header>
    </div>
  )
}

export default Header