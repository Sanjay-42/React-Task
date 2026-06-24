import React, { useState } from 'react'

export default function Example() {

    let[form,setForm]=useState({
    name:"",
    email:"",
    password:"",
    skills:true
    })

    const handleChange=(e)=>{
        let{name,value,type,checked}=e.target
        setForm({
            ...form,
            [name]:type==="checkbox"?checked:value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
        
    }
  return (
    <div className='container'>
        <h2>Example Form</h2>
        <br />
        <br />
        Name:<input type="text" id="" value={form.name} name="name" onChange={handleChange}/><br /><br />
        Email:<input type="email" name="email" id="" value={form.email} onChange={handleChange}/><br /><br />
        Password: <input type="password" name="password" id="" value={form.password} onChange={handleChange}/><br /><br />
        Skills: <input type="checkbox" name="skills" id="" checked={form.skills} onChange={handleChange}/> <br /><br />
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}
