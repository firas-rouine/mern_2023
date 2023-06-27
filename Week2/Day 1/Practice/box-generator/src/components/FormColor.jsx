import React, { useState } from 'react'

export const FormColor = (props) => {
    const [color, setColor] = useState("");
    const [number, setNumber] = useState("")
    const handleForm = (e) => {
        e.preventDefault();
        props.setColors([...props.colors, color])
        props.setNumber(number)
        setColor("");
        setNumber("");
    }
    return (

        <form onSubmit={(e) => { handleForm(e) }}>
            Color <input onChange={(e) => { setColor(e.target.value) }} value={color} /> <br />
            height/width <input type="number" onChange={(e) => { setNumber(e.target.value) }} value={number} /> <br />

            <button>Add</button>
        </form>
    )
}
