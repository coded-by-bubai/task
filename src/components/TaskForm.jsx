import React from 'react'

const TaskForm = (props) => {
  return (
    <form onSubmit={(e)=>{props.submitHandler(e)}} className=' h-2/5 lg:h-full flex flex-col p-10 gap-5 font-medium lg:w-1/2'>
        <input type="text" required value={props.heading} onChange={(e)=>{props.setHeading(e.target.value)}} placeholder='Enter task Heading' className=' border-b-2 outline-none border-b-pink-500 rounded-lg active:border-red-800 py-3 px-5 '/>
        <textarea type="text" required value={props.details} onChange={(e)=>{props.setDetails(e.target.value)}} placeholder='Enter Details...' rows={1} className=' border-b-2 outline-none rounded-lg border-b-pink-500 py-3 h-20 px-5 '></textarea>
        <button className="bg-white text-black p-3 rounded-xl text-2xl font-bold active:bg-gray-500 active:scale-95 ">Add Task</button>
    </form>
  )
}

export default TaskForm