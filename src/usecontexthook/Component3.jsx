import React from 'react'
import { Data } from '../App'
import { useContext } from 'react'

export default function Component3() {
  const{theme,setTheme}=useContext(Data);
  return (
    <div>
      <button className='theme-btn' onClick={()=>setTheme(theme==="light"?"black":"light")}>Change {theme==="light"?"dark":"light"} Theme</button>
    </div>
  )
}
