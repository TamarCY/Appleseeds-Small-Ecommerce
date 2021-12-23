import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"


class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <Link to="/">
                    Home
                </Link>
                <Link to="/products">
                        Products
                </Link>
                <Link to="/cart">
                        Cart
                </Link>
            </div>
        )
    }

}


export default Navbar