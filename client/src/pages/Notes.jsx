import axios from 'axios'
import React, { useEffect } from 'react'

function Notes() {
  const getAllNotes=()=>{
    axios.get(`${import.meta.env.VITE_BASEURL}/notes/get/:userId`)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAllNotes()
  },[])
  return (
    <>
      <div  className="d-flex flex-column flex-md-row h-100 " style={{minHeight:"100vh"}}>
        <div className="w-100 h-100">
        <h1>Your All Notes </h1>
        <div className="p-4 d-flex flex-warp gap-4">
        <p className='text-xl'>No Notes Found</p>

        </div>
        
        </div>
       
      </div>
    </>
  )
}

export default Notes