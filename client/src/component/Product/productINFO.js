import React from 'react'; 
import MyButton from '../uitls/buttun';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';


const ProdNfo = (props) => {
    const detail = props.detail;
    return (
     <div>
      {detail.brand.name}
      {detail.name}
     </div>
    )
}
export default ProdNfo;