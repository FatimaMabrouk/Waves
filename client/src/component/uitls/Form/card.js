import React, { Component } from 'react'

class Card extends Component {
    render() {
        const props = this.props;
                
        return (
            <div className={`card_item_wrapper ${props.grid}`}>
               <div 
               className="image"
               style={{
                //    background:`url(${this.renderCardImage(props.images)}) no-repeat`
               }}
               
               >
                   <div className="action_container">
                       <div className="tags">
                           <div className="brand">{props.brand.name}</div>
                           <div className="name">{props.name}</div>
                           <div className="name">{props.price}</div>
                       </div>
                   </div>

               </div>
            </div>
        )
    }
}

export default Card;
