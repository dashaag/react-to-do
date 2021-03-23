import { useContext } from 'react';
import { TaskContext } from "../TaskContext/TaskContext"
import TaskItem from '../TaskItem/TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useContext(TaskContext);
    console.log(tasks);
    return (
        <div>
            {
                tasks.map(task => (
                    <TaskItem name={task.name} description={task.description} id={task.id}/>
                ))
            }
        </div>
    )
}

export default TaskList;