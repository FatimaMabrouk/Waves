import React from 'react'; 
import MyButton from '../uitls/buttun';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';


const ProdNfo = (props) => {
    const showProdTags = (detail)=> {
        // <div className="product_tags">
        //    {
        //     //    detail.shipping ?
        //          <div className="tag">
        //             <div> <FontAwesomeIcon  icon={faTruck} /> </div> 
        //              <div className="tag_text">
        //                  <div> Free Shipping</div>
        //                  <div> Free Shipping</div>
        //              </div>
                     
        //         </div>

        //     //    :null
        //    }
        // </div>
    }

    const detail = props.detail;
    return (
     <div>
      {detail.brand.name} {detail.name}
      <p>
          {props.description}
      </p>
      { showProdTags(detail)}
     </div>
    )
}
export default ProdNfo;