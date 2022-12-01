import React from 'react'
import {Link} from "react-router-dom";

function AdminHeader({user}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/admin">MED-MA</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/admin">Home</Link>
        </li>

        {!user&&<>
          <li className="nav-item">
          <Link className="nav-link" to="/admin-login">login</Link>
        </li>
        </>}

          {user&&<>
        <li className="nav-item">
          <Link className="nav-link" to="/user">{user}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">logout</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addProducts">AddProducts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin-cart">Products</Link>
        </li>
        
        </>}
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default AdminHeader
