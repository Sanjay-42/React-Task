import React, { useEffect, useState } from 'react'

export default function ApiIntegration() {
    let[data,setData]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
            return resp.json()
        }).then((da)=>{
            setData(da)
        })
    },[])
  return (
    <div>
    <div className='heading'><h1>API Integration(Users)</h1></div>
    
        <div className='container'>
            {data.map((i)=>(
                <div key={i.id} className='card'>
                    <h2>{i.name}</h2>
                    <p><b>UserName: </b>{i.username}</p>
                    <p><b>Email: </b>{i.email}</p>
                    <p><b>Phone No: </b>{i.phone}</p>
                    <p><b>Website: </b>{i.website}</p>
                </div>
            ))}
            </div>
            </div>
        
  )
}
