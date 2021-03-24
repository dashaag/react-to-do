import './App.css';
import AddTask from './Components/AddTask/AddTask';
import { TaskProvider } from './Components/TaskContext/TaskContext';
import TaskList from './Components/TaskList/TaskList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UpdateTask from './Components/UpdateTask/UpdateTask';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="App">
        </div>

        <Switch>
          <Route exact path="/" component={TaskList} />
          <Route exact path="/updateTask/:id" component={UpdateTask}/>
          {/* <Route path="*" component={}/> */}
        </Switch>

      </Router>
    </TaskProvider>
  );
}

export default App;
