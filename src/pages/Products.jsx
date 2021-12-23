import React from "react";

class Products extends React.Component{
    renderProducts = () => {
        this.props.posters.map((item)=>{return console.log(item.name)})
    } 
    render(){
        if (!this.props.posters){return (<div></div>)}
        return(
            <div>
                {this.renderProducts()}
            </div>
        )
    }

}


export default Products