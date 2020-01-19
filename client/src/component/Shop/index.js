import React, { Component } from 'react';
import PageTop from '../uitls/page_top';

import { frets,price } from '../uitls/Form/fixed_categories';

import {  getProductesToShope,  getBrands, getWoods } from '../../actions/products_actions';

import { connect } from 'react-redux';

import LoadmoreCards from './loadmoreCards';
import CollapseCheckbox from '../uitls/CollapseCheckbox';
import CollapseRadio from '../uitls/CollapseRadio';

class Shop extends Component {

    state = {
        grid:'',
        limit:6,
        skip:0,
        filters:{
            brand:[],
            frets:[],
            wood:[],
            price:[]
        }
    }

    componentDidMount(){
        this.props.dispatch(getBrands());
        this.props.dispatch(getWoods());

        this.props.dispatch(getProductesToShope(
            this.state.skip,
            this.state.limit,
            this.state.filters
        ))
    }


    handlePrice = (value) => {
        const data = price;
        let array = [];

        for(let key in data){
            if(data[key]._id === parseInt(value,10)){
                array = data[key].array
            }
        }
        return array;
    }


    handleFilters = (filters,category) => {
       const newFilters = {...this.state.filters}
       newFilters[category] = filters;

        if(category === "price"){
            let priceValues = this.handlePrice(filters);
            newFilters[category] = priceValues
        }
       this.showFilteredResult(newFilters);
       this.setState({
           filters: newFilters
       })
    }

    showFilteredResult = (filters ) => {
        this.props.dispatch(getProductesToShope(
            0,
            this.state.limit,
            filters
        )).then( ()=> {
            this.setState({
                skip:0
            })
        })
    }

    render() {
        console.log(this.state.filters)
        const products = this.props.products;
        return (
            <div>
                <PageTop
                    title="Browse Products"
                />
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            <CollapseCheckbox
                                initState={true}
                                title="Brands"
                                list={products.brands}
                                handleFilters={(filters)=> this.handleFilters(filters,'brand')}
                            />
                             <CollapseCheckbox
                                initState={false}
                                title="Frets"
                                list={frets}
                                handleFilters={(filters)=> this.handleFilters(filters,'frets')}
                            />
                            <CollapseCheckbox
                                initState={false}
                                title="Wood"
                                list={products.woods}
                                handleFilters={(filters)=> this.handleFilters(filters,'wood')}
                            />
                             <CollapseRadio
                                initState={true}
                                title="Price"
                                list={price}
                                handleFilters={(filters)=> this.handleFilters(filters,'price')}
                            />
                           
                        </div>
                        <div className="right">
                            <div className="shop_options">
                                <div className="shope_grids clear">
                                    grids
                                </div>

                            </div>
                            right
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Shop);
