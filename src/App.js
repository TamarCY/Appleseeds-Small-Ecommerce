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
    check: 0,
  };

  getData = async () => {
    const response = await axios.get(
      "https://61c2f3529cfb8f0017a3e7d0.mockapi.io/posters"
    );
    this.setState({ posters: response.data });
  };

  handleBuy = (id) => {
    const selectedItem = this.state.posters.find((item) => {
      return item.id === id;
    });
    // TODO: check if item is in the cart, if true add 1 to quantity, if not add quantity:1
    // or change selected items to an array of objects that each one contains products id and quantity
    
    const copyOfCartItems = [...this.state.cartItems];
    copyOfCartItems.push(selectedItem);
    this.setState((prevState)=>{ return {cartItems: copyOfCartItems, 
       check: prevState.check + +selectedItem.price }})
    // TODO: add to check in the state with prev state the price of the item
    
  };

  handleRemove = (index) => {
    const copyOfCartItems = [...this.state.cartItems];
    const removedItem = copyOfCartItems.splice(index,1);
    console.log(removedItem)

    this.setState((prevState)=>{ return {cartItems: copyOfCartItems, 
      check: prevState.check - +removedItem[0].price }})


  }

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
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={this.state.cartItems}
                  check={this.state.check}
                  handleRemove={this.handleRemove}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
