import { useState } from 'react'

import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'
import EditTask from './components/EditTask'

import UseLocalStorage from './hooks/UseLocalStorage'
import { ThemeButton } from './components/ThemeButton'


function App() {
  const [tasks, setTasks] = UseLocalStorage('react-app.tasks', [])
  const [editedTask, setEditedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }

  const checkTask = (id) => {
    setTasks(prevState => prevState.map(task => (task.id == id
      ?
      { ...task, checked: !task.checked }
      : task

    )))
  }

  const updateTask = (task) => {
    console.log(task.id)
    setTasks(prevState => prevState.map(t => (t.id === task.id
      ? { ...t, name: task.name, description: task.description }
      : t

    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
  }

  return (
    <>
      <div className='container'>
        <header>
          <h1>Task List</h1>
        </header>

        {isEditing && (
          <EditTask
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />)}
        <CustomForm addTask={addTask} />
        {tasks && (
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            checkTask={checkTask}
            enterEditMode={enterEditMode}
          />
        )}

        <div className='themebutton'><ThemeButton /></div>
      </div>
    </>
  )
}

export default App
