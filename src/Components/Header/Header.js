/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div><nav className="navbar navbar-expand-lg text-light navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="*">V Store</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="*">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cartpage">Cart <FaShoppingCart /></Link>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/riot">Riot Games</Link></li>
              <li><Link className="dropdown-item" to="/steam">Steam</Link></li>
              <li><Link className="dropdown-item" to="/super">Supercell</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="/pubg">PUBG Mobile</Link></li>
              <li><Link className="dropdown-item" to="/efootball">eFootball</Link></li>
              <li><Link className="dropdown-item" to="/freefire">Free Fire</Link></li>
              <li><Link className="dropdown-item" to="/rocketleague">Rocket League</Link></li>

            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" disabled/>
          <button className="btn btn-outline-success" type="submit" disabled>Search</button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default Header