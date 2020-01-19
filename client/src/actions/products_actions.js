import axios from 'axios';
import { GET_PRODUCT_BY_SELL ,
         GET_PRODUCT_BY_ARRIVAL ,
         GET_BRANDS,
         GET_WOODS,
         GET_PRODUCTS_TO_SHOP,
         GET_PRODUCTS_DETAIL,
         CLEAR_PRODUCTS_DETAIL
   } from './type';


import { PRODUCT_SERVER } from '../component/uitls/misc';

export function getProductDetail(id){

    const request = axios.get(`/api/products/artical_by_id?id=${id}&type=single`)
    .then(response=>{
        return response.data[0]
    });
     
    return {
        type: GET_PRODUCTS_DETAIL,
        payload: request
    }

}

export function clearProductDetail() {
    return {
        type: CLEAR_PRODUCTS_DETAIL,
        payload: ''
    }
    
}


export function getProductesToShope(skip, limit,  filters = [], previousState = []) {
    const data = {
        skip,
        limit,
        filters
    }
    const requset = axios.post(`${PRODUCT_SERVER}/shop`, data).
                    then( response =>  { 
                        let newState = [
                            ...previousState,
                            ...response.data.articles
                        ]
                        return {
                             size : response.data.size,
                             articles: newState
                    } 
                    });
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



