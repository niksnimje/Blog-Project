import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NotesCard from '../components/NotesCard'

function Notes() {

  const userData = JSON.parse(localStorage.getItem("userData"))

  const [notes, setnotes] = useState([])

  const getAllNotes = () => {
    axios.get(`${import.meta.env.VITE_BASEURL}/notes/get/${userData?._id}`, {
      withCredentials: true
    })
      .then((res) => {
        setnotes(res.data.notes)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  useEffect(() => {
    getAllNotes()
  }, [])

  return (
    <>
      <div className="d-flex flex-column flex-md-row h-100 " style={{ minHeight: "100vh" }}>
        <div className="w-100 h-100 p-4">
          <h1>Your All Notes </h1>

          {notes.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
              {notes.map((el) => (
                <NotesCard
                  key={el._id}
                  title={el.title}
                  body={el.body}
                  image={el.Notesimg}
                  id={el._id}
                />
              ))}
            </div>
          ) : (
            <div className="p-4 d-flex flex-warp gap-4">
              <p className="text-xl">No Notes Found</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Notes
