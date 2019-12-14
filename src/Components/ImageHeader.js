/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import image from '../assets/image.jpg'
import '../css/main.css'
import {Link} from "react-router-dom";

export default class ImageHeader extends React.Component {
    render() {
        return (
            <div>
                <a id="to_bot" href="#ref_to_bot">▼</a>
                <div id="image_header">
                    <img src={image} alt="main header"/>
                    <div id="caption_image">
                        <h1>Bios - Computing blog</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div id="buttons_image">
                            <a>Previous project</a>
                            <a>► Watch a video</a>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}