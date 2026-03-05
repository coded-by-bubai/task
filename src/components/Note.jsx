import React from 'react'

const Note = (props) => {
    const deleteNote = (idx)=>{
    const copyTask = [...props.task]
    copyTask.splice(idx, 1)
    props.setTask(copyTask)
    
  }
  return (
    <div className=" h-50 w-50 rounded-2xl border-2 p-4 pt-4.5 flex flex-col justify-between bg-no-repeat bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] ">
        <div>
            <h1 className=" font-bold text-2xl text-black ">{props.elem.heading}</h1>
            <p className=" text-gray-600 font-medium leading-tight mt-5 ">{props.elem.details}</p>
        </div>
        <button onClick={()=>{deleteNote(props.idx)}} className=" bottom-0 bg-red-300 text-black p-1 rounded-xl text-xl font-bold w-full active:bg-red-500 active:scale-95 ">Delete</button>
    </div>
  )
}

export default Note