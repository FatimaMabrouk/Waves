import React, { Component } from 'react'
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';
import CardBlock from '../uitls/card_block';

import { connect } from 'react-redux';
import Card from 'react'
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
                <CardBlock 
                 list={this.props.products.bySell}
                 title="Best selling guitars"
                />
                {/* <HomePromotion/> */}
                <CardBlock 
                 list={this.props.products.byArrival}
                 title=""
                />
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
