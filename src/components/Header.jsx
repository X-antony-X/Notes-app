import { Sling as Hamburger } from 'hamburger-react'
import { useState , useEffect} from 'react';

function Header({mode,setMode,addForm,notes,search,setSearch}){
    const [open,setOpen] = useState(false)
    const [selected,setSelected] = useState(null)

    

    const handleSelected = (category) => {
        if(category === selected){
           setSelected(null)
        }
         else {
         setSelected(category)
        }
    }

    useEffect(() => {
    document.body.className = mode
        ? "bg-[#0F172A] text-white transition-colors duration-300"
        : "bg-[#F8FAFC] text-[#333C4E] transition-colors duration-300";
    }, [mode]);

    return(
        <div>
            <header className={`w-full h-16 md:h-20 lg:h-24 flex items-center fixed top-0 z-20 ${mode ? " bg-[#1E293B]" : " bg-white"}`}>
                <div className='w-1/2 flex justify-between items-center'>
                    <img src="logo.png" alt="logo" className="w-1/4 h-1/4 flex justify-start"/>
                     <div className="search-box">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" placeholder="search notes" className={`border-gray-400 ${mode ? "bg-[#374151] text-white" : "bg-white"}`}/>
                    </div>
                </div>
                <div className='w-1/2 flex justify-evenly items-center'>
                    <button onClick={addForm} className={`${mode ? "bg-[#3B82F6]" : "bg-[#1D4ED8]"} flex justify-start items-center padding text-white`}><i class="fa-solid fa-plus mx-10"></i> Note</button>
                    <div className='block md:hidden'>
                        <Hamburger size={24} toggled={open} toggle={setOpen} color={mode ? "#FFFFFF" : "#333C4E"}/>
                    </div>
                    <ul className="hidden md:flex gap-6 items-end">
                            {["All","Work","Personal"].map((item) =>
                            <li key={item} onClick={() => handleSelected(item)} className={`border-1 border-[#C4C4C4] rounded-xl padding cursor-pointer ${selected === item ? " active-lg" : `${mode ? "text-white" : "text-[#333C4E]"}`}`}>{item}</li>
                        )}                    
                    </ul>
                </div>
            </header>
            <div className='fixed flex gap-5 bottom-5 right-5 z-20'>
                <button onClick={() => setMode(true)}><i class="fa-regular fa-moon text-sm md:text-base lg:text-2xl"></i></button>
                <button onClick={() => setMode(false)}><i class="fa-regular fa-sun  text-sm md:text-base lg:text-2xl"></i></button>
            </div>
                {open &&
                    <div className={`${mode ? "bg-[#1E293B] text-white" : "bg-white"} h-screen w-3/12 fixed top-0 right-0 z-10`}>
                        <ul className="mt-150 flex flex-col gap-16 items-center">
                            {["All","Work","Personal"].map((item) =>
                            <li key={item} onClick={() => handleSelected(item)} className={`cursor-pointer ${selected === item ? " border-r-8 border-l-8 rounded-lg px-5" : `${mode ? "border-white text-white" : "border-[#333C4E] text-[#333C4E]"}`}`}>{item}</li>)}
                        </ul>
                    </div>
                }
        </div>
    );
}

export default Header;