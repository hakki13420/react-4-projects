import React from 'react'
import './removetask.css'

export default function RemoveTask({removeTask, task}) {
  const handlRemove = (e) => {
    e.stopPropagation()
    removeTask(task);
  }
  return (
    <div className='remove-container' onClick={(e)=>handlRemove(e)}>
        x
    </div>
  )
}
