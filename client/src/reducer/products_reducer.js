import { GET_PRODUCT_BY_ARRIVAL, GET_PRODUCT_BY_SELL } from '../actions/type';

export default function(state= {}, action) {
    switch(action.type) {
       case   GET_PRODUCT_BY_SELL : 
          return {...state , bySell: action.payload}
       
       case   GET_PRODUCT_BY_ARRIVAL : 
          return {...state, byArrival : action.payload}

        default: 
            return state;
        
    }
}