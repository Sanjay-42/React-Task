import React, { useState } from 'react'

export default function ConditionalListRendering() {
    let [logIn,setLogIn]=useState(false)
    let [show, setShow]=useState(false)

const users = [
  {
    name: "Arun",
    age: 27,
    city: "Bangalore",
    role: "Software Engineer",
    contact: "9876543201",
  },
  {
    name: "Kumar",
    age: 24,
    city: "Chennai",
    role: "UI Developer",
    contact: "9876543202",
  },
  {
    name: "Vignesh",
    age: 29,
    city: "Madurai",
    role: "Software Tester",
    contact: "9876543203",
  },
  {
    name: "Keerthana",
    age: 26,
    city: "Coimbatore",
    role: "Automation Tester",
    contact: "9876543204",
  },
  {
    name: "Surya",
    age: 25,
    city: "Theni",
    role: "Data Analyst",
    contact: "9876543205",
  }
];
  return (
    <div className='container'>
        <h1><u>Conditional and List Rendering</u></h1>
        <div className='btncard'>
            {logIn?(
            <div>
                <h2>Welcome</h2>
                <button className='btn1' onClick={()=>setLogIn(!logIn)}>LogOut</button>
            </div>
        ):(
            <div>
                <h2>Login, Please</h2>
                <button className='btn1' onClick={()=>setLogIn(!logIn)}>Login</button>
            </div>
        )}
        <div >
            <button className='btn1 btn2' onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
        </div>
        </div>

        {show &&
        <div className="cardcontainer">
        {users.map((user,i)=>(
                <div key={i} className='card'>
                <h3>Name: {user.name}</h3>
                <h3>Age: {user.age}</h3>
                <h3>City: {user.city}</h3>
                <h3>Role: {user.role}</h3>
                <h3>Contact: {user.contact}</h3>
            </div>
        ))}
        </div>
}
    </div>
  )
}
