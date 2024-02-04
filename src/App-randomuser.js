import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './Components/TaskList';

function App() {
  let [tasks, setTasks] = useState(["Eat", "Drink"])
  let [newTask, setNewTask] = useState("")
  let [users, setUsers] = useState([])

  function addRandomUser() {
    fetch("https://randomuser.me/api/").then((res) => {
      res.json().then((json) => {
        setUsers([json.results[0], ...users])
      })
    })
  }

  useEffect(() => {
    addRandomUser()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
          users.map((user) => {
            return <div key={user.login.uuid}>
              <img src={user.picture.large} /> <br />
              {user.name.first} {user.name.last}
            </div> 
          })
        }

        <button onClick={() => {
          addRandomUser()
        }}>(+) Add User </button>
        
        {/* <TaskList tasks={tasks} setTasks={setTasks} />

        <input value={newTask} onChange={(event) => {
          setNewTask(event.target.value)
        }} />
        
        <button onClick={() => {
          setTasks([...tasks, newTask])
          setNewTask("")
        }}>
          Add task
        </button> */}

      </header>
    </div>
  );
}

export default App;
