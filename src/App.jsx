import React from 'react'
import { useState } from 'react'
import Note from './components/Note'
import TaskForm from './components/TaskForm'

const App = () => {
  const [heading, setHeading] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({heading, details})
    setTask(copyTask)
    
    setDetails('')
    setHeading('')
  }
  return (
    <div className='h-screen w-dvw  bg-black text-white lg:flex p-6'>
      <TaskForm submitHandler = {submitHandler} heading = {heading} setHeading = {setHeading} details = {details} setDetails = {setDetails} />
      <div className=" h-3/5 lg:h-full lg:border-l-2 pl-5 lg:w-1/2 ">
        <h1 className='text-2xl font-extrabold mb-3 underline text-amber-300'>Your Notes</h1>
        <div className=' h-[93%] flex flex-wrap gap-3 overflow-y-auto '>
          {task.length === 0 && <h1 className=' text-2xl font-bold text-gray-600 '> No Task</h1>}
          {task.map(function(elem, idx){
            return <Note task = {task} setTask = {setTask} elem = {elem} key = {idx} idx = {idx} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App