import React from 'react'
import styles from './PersonCard.module.css'
const PersonCard = (props) => {
  return (
    <div className={styles.card}>
        
        <h1>{props.first_name},{props.last_name}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hair_color}</p>
    </div>
  )
}

export default PersonCard