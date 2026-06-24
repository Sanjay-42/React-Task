import React, { useContext } from 'react'
import { Data } from '../App'
import Component3 from './Component3'

export default function Component2() {
  const{user}=useContext(Data)
  return (
    <div className='container'>
      <div>
        <h1><u>UseContext Hook Implementation (Theme Toggle)</u></h1>
      </div>
      <br />
        <div className='form-container'>
        <label htmlFor="">Name:</label>
        <input type="text" name="" id="" defaultValue={user.name}/>

        <label htmlFor="">Email:</label>
        <input type="text" name="" id="" defaultValue={user.email} />

        <label htmlFor="">Phone Number:</label>
        <input type="text" name="" id="" defaultValue={user.phoneNumber}/>

        <label htmlFor="">Address:</label>
        <input type="text" name="" id="" defaultValue={user.address} />

        <label htmlFor="">City:</label>
        <input type="text" name="" id="" defaultValue={user.city}/>
        </div>
        <div>
          <Component3/>
        </div>
    </div>
  )
}
