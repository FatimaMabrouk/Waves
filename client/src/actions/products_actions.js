import axios from 'axios';
import { GET_PRODUCT_BY_SELL , GET_PRODUCT_BY_ARRIVAL  } from './type';


export function getProductsBySell(){
            //?sortBy=sold&order=desc&limit=100
    //articles?sortBy=sold&order=desc&limit=100
    // ?sortBy=sold&order=desc&limit=100
 const request = axios.get('http://localhost:3002/api/product/articles?sortBy=sold&order=desc&limit=4')
                    .then(response => response.data);
                    console.log(request)
    
    return {
        type: GET_PRODUCT_BY_SELL,
        payload: request
    }

}


export function getProductByArrival(){
    const request = axios.get('http://localhost:3002/api/product/articles?sortBy=createdAt&order=desc&limit=4')
                    .then(response => response.data);
                     console.log(request)

    return {
        type: GET_PRODUCT_BY_ARRIVAL,
         payload: request
      }
  
}