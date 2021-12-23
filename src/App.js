import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";



class App extends React.Component{
  state = {
    posters:[]
}

getData = async () => {
  const response = await axios.get("https://61c2f3529cfb8f0017a3e7d0.mockapi.io/posters");
  this.setState({posters: response.data},()=>(console.log(this.state)))
}

componentDidMount () {
  this.getData()
    
}
  render(){
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products posters={this.state.posters}/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
  }
}

export default App;
