import React from 'react'
import '../css/main.css'
import ImageHeader from './ImageHeader'
import Card from './Card'
import AllCards from './AllCards'

export default class ContenuMain extends React.Component {

	constructor(){
		super();
		this.state = {
			posts: []
		}
	}

	addPost(event) {
		event.preventDefault()

		// let el = {
		// 	id: 1,
		// 	image: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80",
		// 	titre: "Titre",
		// 	contenu: "Officia velit excepteur eiusmod anim exercitation sit laboris nisi velit non. Nostrud ullamco irure velit reprehenderit nulla ipsum esse aliquip fugiat ex ex ipsum Lorem. Nisi laboris sit ad cillum enim occaecat duis mollit minim non veniam magna commodo. Nostrud mollit magna laboris commodo quis occaecat officia eu Lorem quis cillum do Lorem. Minim reprehenderit commodo minim irure elit officia minim anim.",
		// 	date: "2019-12-12"
		// }

		// this.setState({
		// 	posts: [...this.state.posts, el]
		// }, () => console.log(this.state.posts))

		
		fetch(`http://localhost:5000/getAll`)
		.then(result => result.json())
		.then(({ data }) => {
			/*
			data.map((item) => {
				this.setState({
					posts: [...this.state.posts, item]
				}, () => console.log(data))
			})
			*/
			this.setState({
				posts: data
			})
		})
		.catch(err => console.error(err))
		

		
	}

	renderPost() {
		return this.state.posts.map((item) => {
			return (
				<Card key={item.id} image={item.image} date={item.date} titre={item.titre} content={item.contenu}/>
			)
		})
	}

    render() {
        return (
            <main>
				<ImageHeader/>

				<h1 id="title_content">Big plus to your productivity</h1>

				<div className="container-fluid justify-content-center row">
					<button id="button" onClick={this.addPost.bind(this)}>click</button>
				</div>

				<AllCards>
					{this.renderPost()}
				</AllCards>
				
			</main>
        )
    }
}