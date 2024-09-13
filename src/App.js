import './App.css';
import YellowDragonLogo from './Components/yellowdragon-logo';
import TasksList from './Components/Taskslist'
//import Task from './Components/Tasks'; // *This is a test done before to verify that the code is working well.


function App() {
 
  return (
    <div className='aplication-tasks'>
       <YellowDragonLogo />
    <div className='principal-tasks-list'>
      <h1>My Tasks</h1>
      {/* <Task /> */}
      <TasksList />
    </div>   
    </div>

  );
};

export default App;
