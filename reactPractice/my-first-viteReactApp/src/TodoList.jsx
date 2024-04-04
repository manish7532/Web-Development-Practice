import { useState } from "react"

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a Shower", "Walk the Dog"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() != "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h3>To Do List</h3>
            <div>
                <input type="text" className="form-control" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
                <button type="button" className="btn btn-sm btn-primary mt-2" onClick={addTask}>Add</button>
            </div>

            <ol className="list-group">
                {tasks.map((task, index) =>
                    <li className="list-group-item m-1 d-flex gap-3" key={index}>
                        <span> {task} </span>
                        <button type="button" className="btn btn-sm btn-danger" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="btn btn-sm btn-light" type="button" onClick={() => moveTaskUp(index)}>👆</button>
                        <button className="btn btn-sm btn-light" type="button" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList