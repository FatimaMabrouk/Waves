import React, { Component } from 'react';
import  ImageLightBox from '../uitls/lightbox'

class productImg extends Component {
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

    renderCardImage = (images) => {
        if(images.length > 0){
            return images[0].url
        }else{
            return `/images/image_not_availble.png`
        }
    }


   
    render() {
        const {detail} = this.props;
        return (
            <div className="product_image_container">
                <div className="main_pic">
                    <div
                        style={{background:`url(${this.renderCardImage(detail.images)}) no-repeat`}} 
                        onClick={()=> this.handleLightBox(0)}
                    >
                    </div>
                </div>
                <div className="main_thumbs">
                    { this.showThumbs(detail)}
                </div>
                {
                    this.state.lightbox ?
                        <ImageLightBox
                            id={detail.id}
                            images={this.state.lightboxImages}
                            open={this.state.open}
                            pos={this.state.imagePos}
                            onclose={()=> this.handleLightBoxClose()}
                        />
                    :null
                }
            </div>
        );
    }
}

export default  productImg;