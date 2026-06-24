import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const {name,email,phone,address,city}=useParams();
  return (
    <div className='user-container'>
        <div>
            <h2><u>User Details</u></h2>
        </div>
        <br />
        <div className='user-details'>
            <p><b>Username: </b>{name}</p>
            <p><b>Email: </b>{email}</p>
            <p><b>Phone Number: </b>{phone}</p>
            <p><b>Address: </b>{address}</p>
            <p><b>City: </b>{city}</p>
        </div>
    </div>
  )
}
