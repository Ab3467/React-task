import React from 'react'
import Button from './Button'

export default function AddTodoForm({additem}) {

    function handleSubmit(){
      additem()
    }

  return (
    <div>
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter list item'/>
        <Button type="button" onClick={handleSubmit}/>
     </form>
    </div>
  )
}
