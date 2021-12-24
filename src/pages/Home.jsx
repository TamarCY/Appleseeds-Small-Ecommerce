import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


class Home extends React.Component{
    
    render(){
        return(
            <div className="Home">
            <h1 className="Home-header">
                Welcome To The Poster Store
            </h1>
            <h2>
                Where you can find here ugly and not interning posters in random prices
            </h2>
            <Link to="/products"><i class="fas fa-door-open"></i></Link>
            </div>
        )
    }

}


export default Home