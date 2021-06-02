import React from 'react'
//import logo from'./logo.png'
import {Link} from 'react-router-dom';

 function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand m1-5" to="...">
        {/*<img src={logo} alt="logo" style={{width: '90px'}}/>*/}
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span>
        <i className="fas fa-bars" style={{ color:'#fff'}}/>
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item active">
          <Link className="nav-link text-white text-uppercase ml-5" to="/">
              Home&nbsp;
              <i className="fas fa-home"></i>
              <span className="sr-only">(current)</span>
              </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase ml-5" to="/news">
            New Books </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase ml-5" to="/contact">
            contact us</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 ml-5" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    );
}

export default Navbar;
