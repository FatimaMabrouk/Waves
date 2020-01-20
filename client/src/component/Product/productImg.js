import React, { Component } from 'react'

export default class productImg extends Component {
    state = {
        lightbox: false,
        imagePos:0,
        lightboxImages:[]
    }

    componentDidMount(){
        if(this.props.detail.image.length > 0){
            let lightboxImages = [];

            this.props.detail.image.forEach(item=>{
                lightboxImages.push(item.url)
            })

            this.setState({
                lightboxImages
            })
        }
    }


    render() {
        console.log(this.state)
        return (
            <div>
                
            </div>
        )
    }
}
