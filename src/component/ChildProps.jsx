import React from 'react'

export default function ChildProps(props) {
  return (
    <div className='usercard'>
        <h3>Name: {props.name}</h3>
        <h3>City: {props.city}</h3>
        <h3>Age: {props.age}</h3>
        <h3>MobileNumber: {props.mobileNumber}</h3>
        <h3>Address: {props.address}</h3>
    </div>
  )
}
