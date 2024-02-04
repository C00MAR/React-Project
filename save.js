import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './Components/TaskList';

function App() {
  let [firstname, setFirstname] = useState("Emir")
  let [lastname, setLastname] = useState("Azaiez")
  let [tasks, setTasks] = useState(["Eat", "Drink"])
  let [newTask, setNewTask] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome {firstname} {lastname}
        </p>
        <button onClick={() => {
          setFirstname("Pascal")
          setLastname("Pascal")
        }}>
          Click me
        </button>
        {
          firstname === "Emir" ? 
            <p> Oui tu es Emir </p> : 
            <h3>Pascal sort</h3>
        }
        
        <TaskList />

        <ul>
          {
            tasks.map((task, index) => {
              return <li onClick={() => {
                setTasks(tasks.filter((task, filterIndex) => {
                  return filterIndex !== index
                }))
              }}>{task}</li>
            })
          }
        </ul>

        <input value={newTask} onChange={(event) => {
          setNewTask(event.target.value)
        }} />
        
        <button onClick={() => {
          setTasks([...tasks, newTask])
          setNewTask("")
        }}>
          Add task
        </button>
        {/* Ajouter la possibilité de supprimer une tâche en cliquant */}
        {/* Supprimer le contenu de l'input lorsqu'on clique sur "Add Task" */}
      </header>
    </div>
  );
}

export default App;
