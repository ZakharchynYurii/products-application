import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.scss'

const Navbar = () => {
    return(
        <div className="navbar bg-primary">
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-logo">
                        <h1 className="text-white">Product Shop</h1>
                    </div>
                    <div className="navbar-btn">
                        <button type="button" className="btn btn-outline-light">
                            <Link to={"/add-product"}>Add Product</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default Navbar;