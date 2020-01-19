import React, { Component } from 'react';
import {connect } from 'react-redux';

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

const mapStateToProps = () => {
    return {
        products : state.products
    }
}

export default connect()(ProductPage);
