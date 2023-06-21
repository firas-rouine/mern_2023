import React, { Component } from 'react'
import './PersonCard.css';
export default class PersonCard extends Component {
    render() {
        // console.log(this.props.person)
        const arrayperson = this.props.person
        console.log(arrayperson);
        return (
            <div className='card'>
                {arrayperson.map((onePerson, index) => {
                    return (<div className='content' key={index}>
                        <h1>{onePerson.first_name},{onePerson.last_name}</h1>
                        <p>Age : {onePerson.age}</p>
                        <p>Hair Color : {onePerson.hair_color}</p>
                        </div>)
                })}
                
            </div>
        )
    }
}
