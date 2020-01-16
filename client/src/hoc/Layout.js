import React, { Component } from 'react'
import Header from '../component/Header_Footer/Header'
import Footer from '../component/Header_Footer/Footer'


export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                HEADER
            <div className="page_container">
                {this.props.children}
            </div>
                <Footer />
            </div>
        )
    }
}

