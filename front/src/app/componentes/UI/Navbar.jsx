import React from 'react'
const Navbar = (e) => {
 
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="img-fluid nav-img" src={`${process.env.PUBLIC_URL}/img/logoChico1.ico`}
            alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            <a className="nav-link" href="/Catalogo">La Carta</a>
            <a className="nav-link" href="/admin">admin</a>
          </div>
        </div>
      </div>
    </nav>


  )
  
}

export default Navbar
