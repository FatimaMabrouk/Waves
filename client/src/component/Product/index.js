import React, { Component } from 'react';
import {connect } from 'react-redux';
import {getProductDetail , clearProductDetail } from '../../actions/products_actions'
import PageTop from '../uitls/page_top';
import ProdNfo from './productINFO';
import ProdImg from './prodImg';
// ProductPage
class ProductPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.dispatch(getProductDetail(id))
        //  .then(response=>{
        //     if(!this.props.products.prodDetail){
        //         this.props.history.push('/');
        //     }
        // })
    }

    componentWillUnmount(){
        this.props.dispatch(clearProductDetail())
    }
    
    render() {
        return (
            <div>
                <PageTop
                    title="Product detail"
                />
                <div className="container">
                {
                    this.props.products.productDetail ?
                   <div className="product_detail_wrapper">
                       <div className="left">
                           images
                       </div>
                       <div className="right">
                           <ProdNfo 
                             addToCart={(id)=>this.addToCartHandler(id) }
                           detail={this.props.products.productDetail}
                          />
                       </div>

                   </div>
          


                    : 'Loading'
                } 

                </div>                
            </div>
        );
    } }



const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps)(ProductPage);
