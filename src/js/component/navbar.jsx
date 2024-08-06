
import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" style={{marginLeft:"16%"}} href="#">Start Bootstrap</a>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{color:"white"}}>
                    <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" style={{paddingRight:"16%"}} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50" href="#">Contact</a>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
