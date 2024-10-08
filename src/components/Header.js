import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-4 container">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link  active" aria-disabled="true">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  active" aria-disabled="true">About us</a>
            </li>
            {
              localStorage.getItem('customer_login') || localStorage.getItem('customer') ?
                <>
                  <Link to='/logout' className="nav-item">
                    <a className="nav-link active" aria-disabled="true">Logout</a>
                  </Link>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link to='/register' className="nav-link  active" aria-disabled="true">

                      Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/login' className="nav-item">
                      <a className="nav-link active" aria-disabled="true">login</a>
                    </Link>
                  </li>
                </>
            }


          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Header;