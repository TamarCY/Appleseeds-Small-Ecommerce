import React from "react";


class Item extends React.Component{
    render(){
        return(
            <div className="ui card">
            <div className="image">
              <img src={this.props.item.image} alt={this.props.item.name}/>
            </div>
            <div className="content">
              <div className="header">{this.props.item.name}</div>
              <div className="description">
                  {this.props.item.price} $
              </div>
            </div>
            <div className="extra content">
              <button className="ui button">Buy</button>
            </div>
          </div>
        )
    }

}


export default Item