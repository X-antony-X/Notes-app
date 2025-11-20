import Header from './components/Header'
import "./components/Header.css"
import Body from './components/Body'
import { useState } from 'react'


function App() {
  const [mode,setMode] = useState(false)
  const [notes,setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])
  const [search,setSearch] = useState("")

  const date = new Date()

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const minutes = date.getMinutes()
  const formattedMinutes = minutes.toString().padStart(2,"0")

  let hours = date.getHours()

  const AmPm = hours >= 12 ? "PM" : "AM"

  hours = hours % 12
  hours = hours ? hours : 12

  const fullDate = `${hours}:${formattedMinutes} ${AmPm} • ${month}/${day}/${year}`

  const addForm = () => {
    const id = notes.length ? notes[notes.length - 1].id + 1: 1
    const newNote = {id , date : fullDate , noteTitle : "", noteContent : "", noteDate : fullDate , noteSort : ""}
    const listNotes = [...notes,newNote]
    setNotes(listNotes)
    localStorage.setItem("notes",JSON.stringify(listNotes))
  }


  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        mode={mode} 
        setMode={setMode} 
        addForm={addForm} 
      />
      <Body
        filteredNotes={notes.filter(note => (note.noteTitle.toLowerCase()).includes(search.toLowerCase()))}
        notes={notes}
        setNotes={setNotes}
        mode={mode}
      />
    </div>
  )
}

export default App
