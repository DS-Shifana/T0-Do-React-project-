import  {useState} from 'react';

import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  const [toDo, setToDo] = useState([
    
  ])

  //temp state

  const [newTask,setNewTask] = useState('');
  const [updateDate,setUpdateDate] = useState('');

  //Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  }

  //Delete Task
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !==id )
    setToDo(newTasks);

  }

  //Mark task as done or completed
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if( task.id ===id ){
        return ({...task,status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  //Cancel update
  const cancelUpdate = () => {
    setUpdateDate('');

  }

  //change task for update
  const changeTask = (e) => {
    let newEntry = {
      id : updateDate.id,
      title : e.target.value,
      status: updateDate.status ? true : false

    }
    setUpdateDate(newEntry);
  }

  //update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateDate.id);
    let updatedObject = [...filterRecords,updateDate]
    setToDo(updatedObject);
    setUpdateDate('');
  }

  return (
    <div className="container App">
    <br/><br/>
    <h2>TO DO LIST APP</h2>
    <br/><br/>

    {/* Update task */}
    {updateDate && updateDate ? (
      <UpdateForm 
      updateDate = {updateDate}
      changeTask = {changeTask}
      updateTask = {updateTask}
      cancelUpdate = {cancelUpdate}
      />

    ) : (

      <AddTaskForm
      newTask = {newTask}
      setNewTask = {setNewTask}
      addTask = {addTask}
      />

    ) }
    
    
    {/* Display ToDos */}
    {toDo && toDo.length ? '' : 'No tasks...'}

    <ToDo 
    toDo = {toDo}
    markDone = {markDone}
    setUpdateDate = {setUpdateDate}
    deleteTask = {deleteTask}
    />
    
    </div>
    

  );
}

export default App;
