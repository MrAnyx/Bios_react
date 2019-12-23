import React from 'react'
import '../css/main.css'

export default class Card extends React.Component {
    render(){
        return (
            <div className="col-lg-8 col-xl-5 col-md-8 col-11 card mb-5 mx-md-5">
                <div className="card-content">
                    <div className="decoration">
                        <img src={this.props.image} alt="test"/>
                    </div>
                    <div className="content">
                        <span className="date">{this.props.date}</span>
                        <h6 className="title pt-1">{this.props.titre}</h6>
                        <div className="resume mt-2">{this.props.content}</div>
                        <br/>
                        <a className="read-more px-4 py-2" href="./">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}