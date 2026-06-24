import React, { useEffect, useState } from 'react'

export default function TimerExample() {
    let[timer,setTimer]=useState(0)

    useEffect(()=>{
        let time=setInterval(()=>{
            setTimer(prev=>prev+1)
        },1000)
    },[])
  return (
    <div>
        <h1 style={{margin:'100px auto',textAlign:'center'}}>Stop Watch</h1>
        <h2 style={{margin:'100px auto',textAlign:'center'}}>Timer: {timer}</h2>
    </div>
  )
}
