import React from 'react'

export default function AddTodoForm() {
  return (
    <div>
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter list item'/>
        
     </form>
    </div>
  )
}
