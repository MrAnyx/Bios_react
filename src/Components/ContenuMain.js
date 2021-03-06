import React from 'react'
import '../css/main.css'
import ImageHeader from './ImageHeader'
import Card from './Card'
import AllCards from './AllCards'
import FormInput from './FormInput'

export default class ContenuMain extends React.Component {

	constructor(){
		super();
		this.state = {
			posts: []
		}
	}

	renderPost() {
		fetch(`http://localhost:5000/getLast4`)
		.then(result => result.json())
		.then(({ data }) => {
			this.setState({
				posts: data
			})
		})
		.catch(err => console.error(err))
		return this.state.posts.map((item) => {
			return (
				<Card key={item.id_post} image={item.image_post} date={item.date_post} titre={item.titre_post} content={item.contenu_post}/>
			)
		})
	}

 

    render() {
        return (
            <main>
				<ImageHeader/>
				<span id="ref_to_bot"></span>
				<h1 id="title_content">Take a look at these posts</h1>

				<AllCards>
					{this.renderPost()}
				</AllCards>

				<FormInput/>


				
			</main>
        )
    }
}