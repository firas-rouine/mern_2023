import React, { useState } from 'react'

const Display = (props) => {

    const [thisTask, setThisTask] = useState(props.task)
    return (
        <div>
            {props.task.done ? <s>{props.task.text}</s> : props.task.text}
            <input onChange={(e) => { props.updateTask(props.index); setThisTask({ text: thisTask.text, done: thisTask.done }) }} type="checkbox" checked={props.task.done} />
            <button onClick={(e) => { props.deleteTask(props.index) }}>Delete</button>
        </div>
    )
}

export default Display