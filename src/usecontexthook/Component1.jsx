import React, { useContext, useState } from 'react'
import { Data } from '../App'
import Component2 from './Component2'

export default function Component1() {
  const{theme}=useContext(Data)
  return (
    <div className={theme}>
    <Component2/>
    </div>
  )
}
