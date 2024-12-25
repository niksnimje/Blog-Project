import React from 'react'
import { Link, useParams } from "react-router-dom";
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';


function NotesCard({title,body,image,id}) {


  const handelDelete=(id)=>{
    axios.delete(`${import.meta.env.VITE_BASEURL}/notes/delete/${id}`,{
      withCredentials:true
    })
    .then((res)=>{
      console.log(res)
      toast.success(res?.data?.message ||  "Note deleted successfully")
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <>
      <div className='' >
            <div
             
              key={id}
              className='m-4 text-white text-center p-2'
              style={{ backgroundColor: '#15162C'}}
              
            >
              <Link to={`/description/${id}`}>
              <img
                src={image}
                alt={title}
                height={200}
                width={400} 
              />
              </Link>
              <br /> <br />
              <h5>{title}</h5>
              <br />
              <p>{body}</p>
              
              <Button variant='outline-primary'  className='text-white m-2'>
                <Link to={`/editnotes/${id}`}>
                Edit
                </Link>
              </Button> 
              <Button variant='outline-danger' onClick={()=>handelDelete(id)} >
                Delete
              </Button>
            </div>
    </div>
      
    </>
  )
}

export default NotesCard