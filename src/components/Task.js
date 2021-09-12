//import React from 'react' // rafce
import { FaTimes } from 'react-icons/fa' //fa :-> Font Aswome

const Task = ({task, onDelete , onToggle}) => {
    return (
        <div className = {`task ${task.remainder ? 'reminder' : ''}`}
        onDoubleClick = {() => onToggle(task.id)}>

        <h3>
        {task.text} <FaTimes style = {{color: 'red', cursor : 'pointer'}}
         onClick= {() =>onDelete ( task.id)}/>
        </h3>

        <p>{task.day}</p>
        <p>{task.remainder}</p>
            
        </div>
    )
}

export default Task
