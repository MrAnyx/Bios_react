/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import image from '../assets/image.jpg'
import '../css/main.css'

export default class ImageHeader extends React.Component {
    render() {
        return (
            <div>
                <a id="to_bot" href="#ref_to_bot">▼</a>
                <div id="image_header">
                    <img src={image} alt="main header"/>
                    <div id="caption_image">
                        <h1>Titre du dernier article</h1>
                        <p>Résumé du dernier article blablablabla blablablabla ablabla balabablablablabla</p>
                        <div id="buttons_image">
                            <a>Read this post</a>
                            <a>Other posts</a>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}