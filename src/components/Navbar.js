import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/about"}>{props.aboutText}</Link>
                    </li>

                </ul>
            </div>
            <div className={`form-check form-switch mx-1 text-${props.mode === 'light' ? 'black': 'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>

        </div>
    </nav>
    );
}

// Also use Proptypes to define the type of a prop

Navbar.propTypes = {
    // Here isRequires means this field is compulsory to pass
    title: propTypes.string.isRequired, 
    aboutText: propTypes.string.isRequired    
}
