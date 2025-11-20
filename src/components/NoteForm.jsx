import { useState } from "react"

function NoteForm({notes,setNotes,mode}){

    const handleTitle = (id,e) => {
        const newTitle = notes.map((title) => 
            title.id === id ? {...title,noteTitle:e.target.value} : title)
        setNotes(newTitle)
        localStorage.setItem("notes",JSON.stringify(newTitle))
    }

    const handleContent = (id,e) => {
        const newContent = notes.map((content) => 
            content.id === id ? {...content,noteContent:e.target.value} : content)
        setNotes(newContent)
        localStorage.setItem("notes",JSON.stringify(newContent))
    }

    function handleSort(id,category) {
        const newSort = notes.map((sort) => 
            sort.id === id ? {...sort,noteSort : sort.noteSort === category ? "" : category} : sort
        )
        setNotes(newSort)
        localStorage.setItem("notes",JSON.stringify(newSort))
}

    const handleDelete = (id) => {
        const deleteNotes = notes.filter((note) => note.id !== id)
        setNotes(deleteNotes)
        localStorage.setItem("notes",JSON.stringify(deleteNotes))
    }
    return (
    <>
        {notes.map((note) => (
            <div key={note.id} className={`w-[300px] h-[400px] m-5 mb-10 ${mode ? "bg-[#1E293B]" : "bg-[#FFFFFF]"}`}>
                <div className={`w-100% h-1/12 border-b-2 border-[#1D4ED8] flex items-center p-5 ${mode ? "bg-[#334155] border-[#3B82F6]" : "bg-[#F3F4F6]"}`}>
                    <ul className="w-3/4 flex justify-evenly">
                        {note.noteDate}
                    </ul>
                    <ul className=" w-1/4 text-center">
                        <li onClick={() => handleDelete(note.id)}><i class="fa-solid fa-trash hover:text-[#EF4444]"></i></li>
                    </ul>
                </div>
                <div className={`w-[100%] h-[90%] border-l-2 border-r-2 border-[#1D4ED8] ${mode ? "border-[#3B82F6]" : ""}`}>
                    <div className="w-100% h-[13%] relative">
                        <i class="fa-solid fa-feather-pointed absolute right-2 top-3 text-[#1D4ED8]"></i>
                        <textarea onChange={(e) => handleTitle(note.id, e)} value={note.noteTitle} className={`overflow-hidden w-[95%] h-[100%] resize-none border-none outline-none pt-2 pr-2 pl-2  ${mode ? "placeholder-[#F3F4F6] text-[#F3F4F6]" : "placeholder-[grey] text-black"}`} placeholder="Note title"></textarea>
                    </div>
                    <div className="w-100% h-[88%] relative">
                        <textarea onChange={(e) => handleContent(note.id, e)} value={note.noteContent} className={`w-full h-full resize-none border-none outline-none p-2 ${mode ? "placeholder-[#F3F4F6] text-[#F3F4F6]" : "placeholder-[grey] text-black"}`} placeholder="Note text"></textarea>
                    </div>
                </div>
                <div className={`w-100% h-1/12 border-t-2 border-[#1D4ED8] flex items-center ${mode ? "bg-[#334155] border-[#3B82F6]" : "bg-[#F3F4F6]"}`}>
                    <ul className="w-full flex justify-evenly">
                        <li onClick={(e) => handleSort(note.id,"work")} className={`cursor-pointer p-1 ${note.noteSort === "work" ? "bg-[#3B82F6] text-white" : ""}`}>Work</li>
                        <li onClick={(e) => handleSort(note.id,"personal")} className={`cursor-pointer p-1 ${note.noteSort === "personal" ? "bg-[#3B82F6] text-white" : ""}`}>Personal</li>
                    </ul>
                </div>
            </div>
        ))}
    </>
    )
}

export default NoteForm