import React from 'react'
import { useFetchData } from '../hooks/useFetchData';

export default function UserTable() {
    let{data:user,loading,error}=useFetchData("https://jsonplaceholder.typicode.com/users")
    if (loading) {
    return <p style={{backgroundColor:'green',color:'white',fontSize:'22px',padding:'10px 20px',width:'fit-content',borderRadius:'5px',margin:'100px auto'}}>Loading...</p>;
  }
  if (error) {
    return <p style={{backgroundColor:'red',color:'white',fontSize:'22px',padding:'10px 20px',width:'fit-content',borderRadius:'5px',margin:'100px auto'}}>{error}</p>;
  }
  return (
    <div className='container'>
        <div>
            <h1><u>API Integration using Custom Hook</u></h1>
        </div>
        <div className='user-container'>
            {user.map((e)=>(
                <div className='user-card'>
                    <p><span>Name: </span>{e.name}</p>
                    <p><span>UserName: </span>{e.username}</p>
                    <p><span>Email: </span>{e.email}</p>
                    <p><span>PhoneNo: </span>{e.phone}</p>
                    <p><span>Website: </span>{e.website}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
