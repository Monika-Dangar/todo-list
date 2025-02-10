
const ToDoItem = (props) => {
    return (
        <>
            <div className='taskCard'>
                <p className={`taskText ${props.task.completed ? 'completed' : ''}`}>{props.task.text}</p>
                <div className="btnContainer">
                    <input type="checkbox" className="doneCheckBox" checked={props.task.completed} onClick={props.onComplete} />
                    <button className="editBtn" onClick={props.onEdit}>Edit</button>
                    <button className="deleteBtn" onClick={props.onDelete}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default ToDoItem

