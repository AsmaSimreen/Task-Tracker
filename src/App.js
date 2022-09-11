import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Passport Appointment',
      day: 'Sept 13th at 9:30 AM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Doctos Appointment',
      day: 'Sept 13th at 5:30 PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Sept 14th at 8:00 AM',
      reminder: true,
    },
    {
      id: 4,
      text: 'On Karting',
      day: 'Sept 13th at 8:00 PM',
      reminder: false,
    }
  ])
 
  //Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);

  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id === id ? { ...task, reminder: !task.reminder} : task))
  }
  return (
    <div className='container'>
      <Header onAdd= {()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/> 
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : ('No Tasks to Show')}
    </div>
  );
}

export default App;
