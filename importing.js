import React, {useState} from 'react'
import '../components/importing.css'

export default function Santhosh(props) {
  
  const OnchangeEve = (event) => {
    console.log("the Change event was performed")
    setText(event.target.value)
  }
  
  const OnclickEve1 = ()=> {
    console.log("the Click event was performed")
    setText(text.toUpperCase())
  }

  const OnclickEve2 = ()=> {
    console.log("the Click event was performed")
    setText(text.toLowerCase())
  }
  
  const [text , setText] = useState('')
  return (
    <div className='main_div'>
        <h1 className='main_head'>Enter the text here :</h1>
        <input type='text' placeholder='Enter the text to modify' value={text} onChange={OnchangeEve} className='input1'  / >

        <button onClick={OnclickEve1} id='btn1'>Convert to upperCase</button>
        <button onClick={OnclickEve2} id='btn2'>Convert to lowerCase</button>
    </div>
      
  )
}
