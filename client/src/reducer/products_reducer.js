import { GET_PRODUCT_BY_ARRIVAL,
         GET_PRODUCT_BY_SELL ,
         GET_BRANDS,
         GET_WOODS ,
         GET_PRODUCTS_TO_SHOP , 
         GET_PRODUCTS_DETAIL, 
         CLEAR_PRODUCTS_DETAIL  
      } from '../actions/type';

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
         return { 
               ...state,
               toShop : action.payload.articles,
               toshopeSize : action.payload.size
            
            }     
      case GET_PRODUCTS_DETAIL:
         return { ...state, productDetail : action.payload }       
      case CLEAR_PRODUCTS_DETAIL :
         return { ...state, productDetail : action.payload }
        default: 
            return state;
        
    }
}