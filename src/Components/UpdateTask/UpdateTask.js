import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../TaskContext/TaskContext";


const UpdateTask = () => {

    const {id} = useParams();
    const [tasks, setTasks] = useContext(TaskContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const updateTask = (e) => {
        e.preventDefault();
        
        
    }

    return (
        <div>
            <form onSubmit={updateTask}>
                <label>Name:</label>
                <input name="name" onChange={updateName}/>
                <label>Description:</label>
                <input name="description" onChange={updateDescription}/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateTask;