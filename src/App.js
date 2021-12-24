import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";

class App extends React.Component {
  state = {
    posters: [],
    cartItems: [],
    check: 0
  };

  getData = async () => {
    const response = await axios.get(
      "https://61c2f3529cfb8f0017a3e7d0.mockapi.io/posters"
    );
    this.setState({ posters: response.data }, () => console.log(this.state));
  };

  handleBuy = (id) => {
    const selectedItem = this.state.posters.find((item)=>{return item.id === id});
    // TODO: chack if item is in the cart, if true add 1 to quantity, if not add quantity:1
    const copyOfCartItems = [...this.state.cartItems];
    copyOfCartItems.push(selectedItem);
    console.log(copyOfCartItems);
    this.setState({cartItems:copyOfCartItems})
    // TODO: add to check in the state with prev state the price of the item
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar cartItems={this.state.cartItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <Products
                  posters={this.state.posters}
                  handleBuy={this.handleBuy}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
