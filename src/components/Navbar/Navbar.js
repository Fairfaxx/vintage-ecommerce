import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
// import Logo from '../Assets/logo_ecommerce.png'


const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/">
                        <a className="navbar-brand">Logo</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/item/:id">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/:id">Categories</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="nav-link" to="/category/:id">{props.children}</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
