import React, { useState } from 'react'

export default function MiniChatApp() {
  let[message,setMessage]=useState("")
  let[allmessage,setAllmessage]=useState([])
  let[msg,setMsg]=useState(false)

  let handlemsg=(m)=>{
    if(message.trim()===""){
      return;
    }
    setAllmessage([...allmessage,message])
    setMessage("");
    setMsg(true)
  }
  return (
    <div className='container'>
      <div>
        <h1><u>Mini Chat Application</u></h1>
      </div>
      <div className='msg-container'>
        <input type="text" name="" id="" placeholder='Enter your Message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <button onClick={handlemsg}>Send Message</button>
      </div>
      {msg &&
      <div className='message'>
        {allmessage.map((e,i)=>(
          <ul>
            <li key={i}>{e}</li>
          </ul>
        ))}
      </div>
      }
      
    </div>
  )
}
