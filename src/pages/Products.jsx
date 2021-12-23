import React from "react";
import Item from "../components/Item"
import "./Products.css"


class Products extends React.Component{
    renderProducts = () => {
        // return this.props.posters.map((item)=>{return <div key="item.id">{item.name}</div>})
        return (
            this.props.posters.map((item) => {
                return <Item
                    key={item.id}
                    item={item}
                />
            })
        )
    } 
    
    render(){
        if (!this.props.posters){return (<div></div>)}
        return(
            
            // <div>
            //     {this.renderProducts()}
            // </div>
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