import { GET_PRODUCT_BY_ARRIVAL, GET_PRODUCT_BY_SELL , GET_BRANDS,
   GET_WOODS , GET_PRODUCTS_TO_SHOP} from '../actions/type';

export default function(state= {}, action) {
    switch(action.type) {
       case   GET_PRODUCT_BY_SELL : 
          return {...state , bySell: action.payload}
       
       case   GET_PRODUCT_BY_ARRIVAL : 
          return {...state, byArrival : action.payload}

       case GET_BRANDS:
            return {...state, brands: action.payload }
            
       case GET_WOODS:
            return {...state, woods: action.payload }    
      case GET_PRODUCTS_TO_SHOP :
         return { ...state}      

        default: 
            return state;
        
    }
}