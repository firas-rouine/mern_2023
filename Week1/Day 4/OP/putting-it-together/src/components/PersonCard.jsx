import React, { Component } from 'react'
import './PersonCard.css';
export default class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }

    }

    increment(){
        // console.log(this.state.age);
        this.setState({ age : this.state.age +1}
  
        )

    }
    render() {

        return (
            <div className='card'>
                <div className='content' >
                    <h1>{this.props.firstName},{this.props.lastName}</h1>
                    <p>Age : {this.state.age}</p>
                    <p>Hair Color : {this.props.hairColor}</p>
                </div>
                <button onClick={() => this.increment()}>Birthday Button for {this.props.lastName} {this.props.firstName} </button>


            </div>
        )
    }
}
