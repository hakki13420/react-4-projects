import React from 'react'
import './form.css'

export default function Form({ addTask }) {
  const [taskToAdd, setTaskToAdd] = React.useState({})
  const handlChange = (e) => {
    setTaskToAdd({task:e.target.value,status:false})
  }
  const submitForm = (e) => {
    e.preventDefault()
    console.log('submit form')
    addTask(taskToAdd)
  }
  return (
    <div className='form-task'>
      <form onSubmit={(e)=>submitForm(e)}>
        <input onChange={handlChange} type="text" placeholder='enter the task'/>
        <button type="submit">Add task</button>      
      </form>      
    </div>
  )
}
