import { useState } from "react"
import ToDoItem from "./ToDoItem"

const ToDoList = () => {
    const [taskText, setTaskText] = useState('');
    const [taskList, setTaskList] = useState([])

    const updateListWithIndex = (taskId) => {
        setTaskList((prev) => {
            const updatedList = prev.filter((task) => task.id !== taskId);
            return updatedList.map((task, index) => ({
                ...task,
                id: index,
            }));
        });
    }

    const handleAdd = () => {
        if (taskText.trim() === '') return;
        const newTask = {
            id: taskList.length ? taskList[taskList.length - 1].id + 1 : 0,
            text: taskText,
            completed: false,
        };
        setTaskList((prev) => [...prev, newTask]);
        setTaskText('');

    }

    const handleEdit = (taskId) => {
        taskList.map((task) => {
            if (task.id == taskId) {
                setTaskText(task.text);
            }
        })

        updateListWithIndex(taskId)
    }

    const handleDelete = (taskId) => {
        updateListWithIndex(taskId)
    }

    const handleTaskComplete = (taskId) => {
        setTaskList((prev) =>
            prev.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    }

    return (
        <>
            <div>
                <div className="addItems">
                    <input type="text" value={taskText} className="textBar" placeholder="write here..." onChange={(e) => setTaskText(e.target.value)} />
                    <button className="addBtn" onClick={handleAdd}>Add task</button>
                </div>

                <div className="itemContainer">
                    {taskList.map((task) => (
                        <>
                            <div key={task.id} className="itemCard">
                                <span className="taskId">{task.id + 1}</span>
                                <ToDoItem
                                    task={task}
                                    onEdit={() => handleEdit(task.id)}
                                    onDelete={() => handleDelete(task.id)}
                                    onComplete={() => handleTaskComplete(task.id)} />
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ToDoList

