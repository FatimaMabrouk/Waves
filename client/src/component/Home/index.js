import React, { Component } from 'react'
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';

import { connect } from 'react-redux';
import { getProductByArrival, getProductsBySell } from '../../actions/products_actions';


class Home extends Component {

   componentDidMount() {
       this.props.dispatch(getProductsBySell());
       this.props.dispatch(getProductByArrival());
   }

    render() {
        return (
            <div>
                <HomeSlider/>
                {/* <HomePromotion/> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}


export default connect(mapStateToProps)(Home) ;
