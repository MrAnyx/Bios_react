import React from 'react'
import '../css/main.css'
import ImageHeader from './ImageHeader'
import Card from './Card'
import AllCards from './AllCards'
import image from '../assets/image2.jpg'

export default class Main extends React.Component {

	constructor(){
		super();
		this.state = {
			posts: []
		}
	}

	addPost() {
		this.setState((state) => {
			return {posts: state.posts + 1}
		}, console.log(this.state.posts))
	}

    render() {
        return (
            <main>
				<ImageHeader/>

				<h1 id="title_content">Big plus to your productivity</h1>

				<div class="container-fluid justify-content-center row">
					<button id="button" onClick={this.addPost.bind(this)}>click</button>
				</div>

				<AllCards>
					<Card image={image} date="2019-12-16" titre="Titre1" content="Ex incididunt dolore mollit occaecat deserunt. Duis reprehenderit commodo ullamco sit fugiat nulla culpa officia velit commodo elit. Ut nisi deserunt magna reprehenderit occaecat cillum deserunt magna deserunt irure magna labore enim. Consectetur veniam do amet tempor adipisicing ad dolore ea. Et cupidatat proident culpa incididunt. Dolore consequat ea sunt occaecat officia velit exercitation esse enim mollit. Id consectetur in consectetur eiusmod laborum anim dolor occaecat ut magna Lorem dolore nisi eu."/>
					<Card image='https://source.unsplash.com/WLUHO9A_xik/1600x900' date="2019-12-16" titre="Titre1" content="Ex incididunt dolore mollit occaecat deserunt. Duis reprehenderit commodo ullamco sit fugiat nulla culpa officia velit commodo elit. Ut nisi deserunt magna reprehenderit occaecat cillum deserunt magna deserunt irure magna labore enim. Consectetur veniam do amet tempor adipisicing ad dolore ea. Et cupidatat proident culpa incididunt. Dolore consequat ea sunt occaecat officia velit exercitation esse enim mollit. Id consectetur in consectetur eiusmod laborum anim dolor occaecat ut magna Lorem dolore nisi eu."/>
				</AllCards>
				
			</main>
        )
    }
}