import React from 'react'
import '../css/main.css'
import logo from '../assets/Bios_black.png'

import {Link} from "react-router-dom";

export default class Header extends React.Component {
	render () {
		return (
			<header>
				<div id="content_header">
					<Link to="/">
						<div id="logo">
							<img src={logo} alt="Logo de la page"/>
						</div>
					</Link>
					<div id="links">
						<Link className="link" to="/test">Forum</Link>
						<Link className="link" to="/test1">Chat</Link>
						<Link id="dl_app" to="/test1">Blog</Link>
					</div>
				</div>
			</header>

		)
	}
}