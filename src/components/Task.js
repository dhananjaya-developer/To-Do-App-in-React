import {FaTimes} from 'react-icons/fa'

const Task = ({task,onDelete,onToggle}) => {
    return (
        <div className={`task ${task.Reminder ? 'reminder':''}`} onDoubleClick={()=>onToggle(task.Id)}>
            <h3>{task.Name} <FaTimes style={{color: 'red',cursor: 'pointer'}}
             onClick={()=>onDelete(task.Id)}/></h3>
            <p>{task.Date}</p>
        </div>
    )
}

export default Task
