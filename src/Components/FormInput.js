import React from 'react'
import '../css/main.css'

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

    submit() {
        fetch('http://localhost:5000/submitPost', {
            method: "POST", 
            header: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titre: this.state.titre,
                image: this.state.image,
                contenu: this.state.contenu
            })
        })
    }

    render() {
        return (
            <div>

                <input type="text" placeholder="Text : " onChange={this.updateTitre.bind(this)}/>
                <input type="text" placeholder="Contenu : " onChange={this.updateContenu.bind(this)}/>
                <input type="text" placeholder="Image : " onChange={this.updageImage.bind(this)}/>
                <button type="submit" onClick={this.submit.bind(this)}>Submit</button>

            </div>
        )
    }
}