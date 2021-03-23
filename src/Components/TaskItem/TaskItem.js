import TaskList from "../TaskList/TaskList"


const TaskItem = ({name, description, id}) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Description: {description}</h2>
            <hr/>
        </div>
    );
}

export default TaskItem;

