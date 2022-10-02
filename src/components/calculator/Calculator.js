import React from 'react'
import Button from './Button'
import DisplayCalc from './DisplayCalc'
import './calculator.css'

export default function Calculator() {
  //const numbers=Array.from(Array(10).keys())
  const numbers=[1,2,3,'+',4,5,6,'-',7,8,9,'*','=',0,'.','/','Clear']

  const [result, setResult] = React.useState(0)
  
  const handlClick = (value) => {
    if (value === "=") {
      setResult(eval(result))
    } else if (value==='Clear') {
      setResult(0)      
    }else {      
      setResult(result => {
        if (result === 0) return value
        return result.toString() + value.toString();
      })
    }
  }
  
  return (
    <div className='calculator'>
      <DisplayCalc result={result} />
      <div className="pave">
        {
          numbers.map(number => {
            return <Button key={ number} value={number} handlClick={handlClick} />
          })  
        }
      </div>
    </div>
  )
}