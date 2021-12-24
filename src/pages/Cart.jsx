import React from "react";
import "./Cart.css"

class Cart extends React.Component {
    renderCart() {
        return this.props.cartItems.map((item,index) => {
            return <div data-index={index} className="item">
                <div className="right floated content">
                    <div className="ui button" onClick={()=>(this.props.handleRemove(index))}>X</div>
                </div>
                <img className=" ui small image" src={item.image} alt="" />
                <div className=" bottom aligned content">
                    <span className="Cart-Product-name">
                        {item.name}
                    </span>
                    <span className="Cart-Product-price">
                        {item.price} $
                    </span>
                </div>
            </div>
        })
    }
    render() {
        console.log(this.props)
        if ((!this.props) || (this.props.cartItems.length === 0)) {
            return <div className="Cart-empty">Cart is empty</div>
                // TODO: display something when the cart is empty
        }
        return (
            <div className="ui container">
                <div className="ui middle aligned divided list">
                    {this.renderCart()}
                </div>
                <div class="ui divider ">
                <div className="Cart-sum ">Total {this.props.check} $</div>
                <button className="ui button right floated blue">Pay Now</button>
                </div>
            </div>
        )
    }

}


export default Cart