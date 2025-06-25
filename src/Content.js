import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
const Content = ({items,handleDelete,handleCheck,Error}) => {

  if(Error !== 'null'){
    return(
      <p>Could Not Recieve Data</p>
    )
  }

  return (
    items.length ? (
    <main>
      
        {items.map(item => (
             
            <li  style = {{listStyle : 'none'}} key = {item.id}>
            <input 
            type="checkbox" 
            
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
            />     
           {item.item}
            <FaTrashAlt 
            role="button"
            onClick={()=>handleDelete(item.id)}/>
              </li>
          
        ))} 
      
    </main>
    ) :
       ( <p style={{color:'red'}}>No List Items</p> )
  )
}

export default Content
