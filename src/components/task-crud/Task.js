import React from 'react'
import RemoveTask from './RemoveTask'
import './task.css'

export default function Task(props) {
  return (
    <div
      onClick={() => props.selectTask(props.children)}
      className={props.status ? "done task" : "task"}
    >
      <div>{props.children}</div>
      <RemoveTask removeTask={props.removeTask} task={props.children}/>
    </div>
  );
}
