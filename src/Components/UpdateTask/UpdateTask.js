import { useContext, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { TaskContext } from "../TaskContext/TaskContext";


const UpdateTask = () => {

    const { id } = useParams();
    const [tasks, setTasks] = useContext(TaskContext);
    const currentTask = tasks.find(task => task.id == id);
    const [name, setName] = useState(currentTask.name);
    const [description, setDescription] = useState(currentTask.description);
    const [isUpdated, setIsUpdated] = useState(false);
 
    console.log(currentTask);
    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const updateTask = (e) => {
        e.preventDefault();
        const newTasks = tasks.map(task => (
            task.id != id ? task : { name: name, description: description, id: id }
        ));
        setTasks(newTasks);
        setIsUpdated(true);
    }

    if (isUpdated === false) {
        return (
            <div>
                <form onSubmit={updateTask}>
                    <label>Name:</label>
                    <input name="name" onChange={updateName} value={name} />
                    <label>Description:</label>
                    <input name="description" onChange={updateDescription} value={description} />
                    <button type="submit">Update</button>
                </form>
            </div>

        )
    }
    else{
        return <Redirect to="/"/>
    }
}

export default UpdateTask;