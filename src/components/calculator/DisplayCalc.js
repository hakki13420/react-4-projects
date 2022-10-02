import React from 'react'
import './displayCalc.css'

export default function DisplayCalc({result}) {
  return (
    <div className='display-calc'>
          {result}
    </div>
  )
}
