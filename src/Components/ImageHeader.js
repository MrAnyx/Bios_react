import React from 'react'
import image from '../assets/image.jpg'
import '../css/main.css'

export default class ImageHeader extends React.Component {
    render() {
        return (
            <div id="image_header">
                <img src={image} alt="main image header"/>
                <div id="caption_image">
                    <h1>Nuit de l'info 2019</h1>
                    <h2>Crab'Gang++</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div id="buttons_image">
                        <a>Previous project</a>
                        <a>► Watch a video</a>
                    </div>
                </div>
            </div>
        )
    }
}