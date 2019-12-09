import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Main/>
				<Footer/>
			</div>
		)	
	}
}

