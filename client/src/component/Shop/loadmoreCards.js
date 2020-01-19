import React  from 'react';
import CardBlockShop from '../uitls/card_block_shop';

 const  LoadmoreCards = (props) => {
   return (
    <div>
        <div>
            <CardBlockShop
                grid={props.grid}
                list={props.products}
            />
        </div>
        {/* {
            props.size > 0 && props.size >= props.limit ?
                <div className="load_more_container">
                    <span onClick={()=> props.loadMore()}>
                        Load More
                    </span>
                </div>
            :null
        } */}
        


    </div>
);
}; 
     

export default LoadmoreCards;


// return (
//     <div>
//         <CardBlockShop
//         grid={this.props}
//         list={props.list}
//         />
//     </div>
    
// )