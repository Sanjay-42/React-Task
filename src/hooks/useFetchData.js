import axios from 'axios'
import React, { useEffect, useState } from 'react'
export function useFetchData(link){
    let[data,setData]=useState([])
    let[loading,setLoading]=useState(true)
    let[error,setError]=useState("")

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(link)
                setData(response.data)
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    },[link])

    return {data,loading,error}
}