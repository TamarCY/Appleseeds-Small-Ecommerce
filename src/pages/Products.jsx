import React from "react";
import Item from "../components/Item"
import "./Products.css"


class Products extends React.Component{
    renderProducts = () => {
        return (
            this.props.posters.map((item) => {
                return <Item
                    key={item.id}
                    item={item}
                    handleBuy={this.props.handleBuy}
                />
            })
        )
    } 
    
    render(){
        if (!this.props.posters){return (<div></div>)}
        return(
            <div>
                <div className="Products ui container">
                    <div className="ui cards">
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        )
    }

}


export default Products