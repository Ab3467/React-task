import React from 'react'
import InputItems from './InputItems'

export default function ListItem({list}) {
  return (
   <div>
    <ul>
        {list.length > 0 ?
       <InputItems/> 
       :
       <p className=' font-serif'>Nothing to do!</p>
    }
    </ul>
   </div>
  )
}
