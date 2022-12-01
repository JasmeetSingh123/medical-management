import React from 'react'
import {Link} from "react-router-dom";

function Header({user}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">MED-MA</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav d-flex me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>

        {!user&&<>
          <li className="nav-item">
          <Link className="nav-link" to="/login">login</Link>
        </li>
        </>}

          {user&&<>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/user">{user}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/bookmark">bookmark list</Link>
        </li>
        
        </>}
        
      </ul>
      <div className='d-flex'>
      {user&&<>
        <li className="">
          <Link className="btn btn-primary ml-lg-3" to="/">Logout</Link>
        </li>
        
        </>}
      </div>
      
    </div>
  </div>
</nav>
  )
}

export default Header
