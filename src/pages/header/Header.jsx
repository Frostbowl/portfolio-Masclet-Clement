import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="logo">
                        <Link to="/" className="navbar-brand" style= {{color:'#F2E3D5'}} >
                            <img src="../img/logo.jpg" alt="Logo de Masclet Clément" width="110"/> Clément Masclet
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to='/' className="nav-link active" aria-current="page" style= {{color:'#F2E3D5'}} >accueil</Link>
                            <Link to='#' className="nav-link" style= {{color:'#F2E3D5'}} >mes réalisations</Link>
                            <Link to='#' className="nav-link" style= {{color:'#F2E3D5'}} >me contacter</Link>
                    </div>
                    </div>
                </div>
            </nav>

            
        </header>
    )
}

export default Header;