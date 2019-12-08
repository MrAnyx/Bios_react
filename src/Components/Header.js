import React from 'react'
import '../css/fonts.css'
import '../css/header.css'
import logo from '../assets/logo.png'

export default class Header extends React.Component {
    render () {
        return (
            <header>
                <div id="content_header">
                    <div id="logo">
                        <img src={logo} alt="Logo de la page"/>
                    </div>
                    <div id="links">
                        <span className="link">Features</span>
                        <span className="link">Feedback</span>
                        <span id="dl_app">Download app</span>
                    </div>
                </div>
            </header>
        )
    }
}