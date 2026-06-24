import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserList() {
  let[user,setUser]=useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").
    then((resp)=>{
      return resp.json();
    }).then((data)=>{
      console.log(data);
      
      setUser(data);
    })
  },[])
  return (
    <div className='container'>
      <div>
            <h1><u>useParams Hook Implementation</u></h1>
        </div>
      <div>
        <h1><u>User-List</u></h1>
      </div>
      <div className='list-container'>
        {
        user.map((e)=>(
          <ul key={e.id}>
            <li >
              <Link to={`/userdetails/${e.id}/${e.name}/${e.email}/${e.phone}/${e.address.street}/${e.address.city}`}>{e.name}</Link>
            </li>
          </ul>
        ))
      }
      </div>
    </div>
  )
}
