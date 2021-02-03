import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { CartContext } from '../../Context/CartContext';



const Navbar = (props) => {

    // const { cosme } = useContext(CartContext);
    // const { cosme } = cosme

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
                                <Link className="nav-link" to='/category/1'>Category 1</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/category/2'>Category 2</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="nav-link d-flex" to="/category/:id"><p className="ml-5"></p></Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
