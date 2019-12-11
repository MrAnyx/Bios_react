import React from 'react'
import '../css/main.css'
import logo from '../assets/logo.png'

import {Link} from "react-router-dom";

export default class Header extends React.Component {
	render () {
		return (
			<header>
				<div id="content_header">
					<div id="logo">
						<img src={logo} alt="Logo de la page"/>
					</div>
					<div id="links">
						<Link className="link" to="/">Features</Link>
						<Link className="link" to="/test">Feedback</Link>
						<Link id="dl_app" to="/test1">Download app</Link>
					</div>
				</div>
			</header>

		)
	}
}