import React from 'react'
import '../css/main.css'
import axios from 'axios'

export default class FormInput extends React.Component {
    constructor() {
        super()
        this.state = {
            titre: "",
            contenu: "",
            image: ""
        }
    }

    updateTitre(event) {
        this.setState({
            titre: event.target.value
        }, () => console.log(this.state.titre))
    }
    updateContenu(event) {
        this.setState({
            contenu: event.target.value
        }, () => console.log(this.state.contenu))
    }
    updageImage(event) {
        this.setState({
            image: event.target.value
        }, () => console.log(this.state.image))
    }

    submit(event) {
        event.preventDefault()

        axios({
            method: 'post',
            url: 'http://localhost:5000/submitPost',
            data: {
                titre: this.state.titre,
                contenu: this.state.contenu,
                image: this.state.image
            }
        })
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit.bind(this)}>
                    <input type="text" placeholder="Text : " onChange={this.updateTitre.bind(this)}/>
                    <input type="text" placeholder="Contenu : " onChange={this.updateContenu.bind(this)}/>
                    <input type="text" placeholder="Image : " onChange={this.updageImage.bind(this)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}