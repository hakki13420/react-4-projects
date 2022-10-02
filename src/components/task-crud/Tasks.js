import React from 'react'
import Form from './Form'
import Task from './Task'
import './tasks.css'

export default function Tasks() {

  const [tasks, setTasks] = React.useState([])

  React.useEffect(() => {
    
  }, [tasks])
  

  const addTask = (task) => {
    if (!tasks.find(el => el.task == task.task)) return setTasks([...tasks, task])
    alert(' you have alredy this task...please enter other task')
  }

  const selectTask = (task) => {
    
    const updatedTask = tasks.map(el => el.task == task ? {...el,status:true} : el)    
    setTasks([...updatedTask])    
  }

  const removeTask = (task => {
    if (window.confirm('are you sure to delete this task?')) {
      const result = tasks.filter(el => el.task !== task)   
      setTasks(result)      
    }    
  })

  return (
    <div className='tasks-container'>
      <Form addTask={ addTask }/>
      <div className="tasks-crud-container">        
        {
          tasks.map((task,i) => {
            return <Task key={i} selectTask={selectTask} status={task.status} removeTask={removeTask}>
              {task.task}
            </Task>            
          })
        }
      </div>
    </div>
  )
}
