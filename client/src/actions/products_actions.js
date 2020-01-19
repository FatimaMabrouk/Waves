import axios from 'axios';
import { GET_PRODUCT_BY_SELL , GET_PRODUCT_BY_ARRIVAL , GET_BRANDS,
    GET_WOODS  , GET_PRODUCTS_TO_SHOP } from './type';


import { PRODUCT_SERVER } from '../component/uitls/misc';






export function getProductesToShope() {
    

    const request = axios.get('http://localhost:3002/api/products/shop').
                    then( response =>  response.data);
                
        return {
            type: GET_PRODUCTS_TO_SHOP,
            payload: requset
        }            
    
                }


                
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





////////////////////////////////////
//////        CATEGORIES
////////////////////////////////////

export function getBrands(){
    // 'http://localhost:3002/api
    const request = axios.get(`${PRODUCT_SERVER}/brands`)
                .then(response => response.data );

    return {
        type: GET_BRANDS,
        payload: request
    }

}

export function getWoods(){
    const request = axios.get(`${PRODUCT_SERVER}/woods`)
    .then(response => response.data );

    return {
        type: GET_WOODS,
        payload: request
    }
}



