import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"


class Navbar extends React.Component {
    render() {
        return (
            <>
                <div className="ui secondary pointing  huge menu" id ="Navbar">
                    <Link to="/" className="item">
                        <i className="fas fa-home"></i>
                    </Link>
                    <Link  to="/products" className="item">
                        Products
                    </Link>
                    
                    <div className="right menu">
                        <Link  to="/" className="ui item">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="Navbar-cart">{this.props.cartItems.length}</span>
                        </Link>
                    </div>
                </div>
            </>
        )
    //     return (
    //         <div className="Navbar">
    //             <Link to="/">
    //                 Home
    //             </Link>
    //             <Link to="/products">
    //                     Products
    //             </Link>
    //             <Link to="/cart">
    //                     Cart
    //             </Link>
    //         </div>
    //     )
    // }
        }
}


export default Navbar