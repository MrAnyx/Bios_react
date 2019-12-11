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
		event.preventDefault();
		let el = {
			image: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
			date: "2019-12-16",
			titre: "Titre",
			content: "Pariatur Lorem est veniam fugiat sint esse nostrud pariatur aliqua. Mollit consectetur et sunt fugiat ea laborum ipsum non occaecat nisi deserunt dolor. Ipsum elit laboris cupidatat officia officia Lorem nisi laborum deserunt. Ea et excepteur ipsum irure cillum."
		}
		this.setState({
			posts: [...this.state.posts, el]
		}, () => console.log(this.state.posts))
	}

	renderPost() {
		return this.state.posts.map((item) => {
			return (
				<Card image={item.image} date={item.date} titre={item.titre} content={item.content}/>
			)
		})
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
					{this.renderPost()}
				</AllCards>
				
			</main>
        )
    }
}