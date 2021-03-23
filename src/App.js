import './App.css';
import AddTask from './Components/AddTask/AddTask';
import { TaskProvider } from './Components/TaskContext/TaskContext';
import TaskList from './Components/TaskList/TaskList';

function App() {
  return (
    <TaskProvider>
    <div className="App">
      <AddTask/>
      <TaskList/>
    </div>
    </TaskProvider>
  );
}

export default App;
