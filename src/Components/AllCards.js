import React from 'react'
import '../css/main.css'

export default class AllCards extends React.Component {
    render() {
        return (

            <div className="container-fluid pt-4 mb-5">
                <div className="row justify-content-center">
                    {this.props.children}
                </div>
            </div>
        )
    }
}