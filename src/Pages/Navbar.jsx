import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import More from '../Components/More';
import '../css/navbar.css'

function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-white mb-1"> <AiOutlineMenu /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className=" logo1">
              <NavLink className=' ' to="/">
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/300px-CNN_International_logo.svg.png' alt="ere" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to="/World">
                  World
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='/Africa'>
                  Africa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to="/Americas">
                  Americas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to="/Asia">
                  Asia
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to="/Australia">
                  Australia
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' >
                  <More />
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className='nav-item mx-1'>
                <div className="nav-link mt-2 ">
                Audio

                </div>
              </div>
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
              <button className='btn btn-outline-light btn-none mx-1'> <FaSearch /></button>
              <button className='btn btn-outline-light mx-1 '> Log In</button>

            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
