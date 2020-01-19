import React, { Component } from 'react';
import {connect } from 'react-redux';
import {getProductDetail , clearProductDetail } from '../../actions/products_actions'

class ProductPage extends Component {

   componentDidMount(){
       const id = this.props.match.params.id;
       console.log(id);
   }

    render() {
        return (
            <div>
               Product detailes 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

export default connect()(ProductPage);
