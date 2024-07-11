// two-way Binding -> The process of binding both ways i.e. telling the react and also user that we are changing the 
//  things jst like we did below by declaring the title and using it in form but in form react don't 
//  know that we are changing so we link title with value and we use onChange. So in onChange we use
//  setTitle which is the variable name for title to store value and in that e.target.value will be passed   
//  so that whatever we will type that will be showed to user and known to react as well.
"use client";
import React, { useState } from 'react'

const page = () => {
  const[title,setTitle] = useState("") 
  const[desc,setDesc] = useState("")  
  const[mainTask,setMainTask] = useState([]) 

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}])
    setTitle("")
    setDesc("")
    console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i)=> {
      return (
        <li key={i} className='flex justify-between items-center mb-5'>
          <div className='flex items-center justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
          <button 
            onClick={()=>{
              deleteHandler(i)
            }}
            className='bg-red-400 text-white px-4 py-2 rounded text-bold'>
            Delete
          </button>
        </li>
      )
    })
  }

  return (
    <>
    <h1 className='bg-slate-500 text-gray-900 text-center p-5 text-5xl font-bold'>Akshay's To-Do List</h1>
    <form onSubmit={submitHandler}>
      <input 
        type='text'
        className='border-black border-2 text-2xl m-5 px-4 py-2 rounded-lg'
        placeholder='Enter Your Title Here'
        value={title}
        onChange={(e)=> {
          setTitle(e.target.value)
        }}
      />
      <input 
        type='text'
        className='border-black border-2 text-2xl m-5 px-4 py-2 rounded-lg'
        placeholder='Enter Description'
        value={desc}
        onChange={(e)=> {
          setDesc(e.target.value)
        }}
      />
      <button className='bg-black text-white rounded m-5 py-3 px-4 text-2xl font-bold'>Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
    </div>
    </>
  )
}

export default page
