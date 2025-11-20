import { useState } from "react"
import NoteForm from "./NoteForm";

function Body({setNotes,filteredNotes,mode}){

    return(
        <div className="pt-40 flex flex-wrap items-center justify-evenly">
            <>
            {filteredNotes.length ? 
            (<NoteForm notes={filteredNotes} setNotes={setNotes} mode={mode}/>) : <p className="pt-30 w-[100%] text-center">There is no notes</p>
            }
            </>
        </div>
    )
}

// `${section === work? "border-b-2 border-[#1D4ED8]" : ""}`
// `${section === work? "border-b-2 border-[#1D4ED8]" : ""}`

export default Body;