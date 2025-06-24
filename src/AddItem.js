import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { FaPlus } from 'react-icons/fa'



const AddItem = ({NewItem , setNewItem, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
        type="text"
        placeholder='Add Item'
        value={NewItem}
        onChange={(e) => setNewItem(e.target.value)}

         />
         <button style={{color:'blue'}}>
            <FaPlus role = 'button'
            onClick={ handleSubmit}/>
         </button>

    </form >
  )
}

export default AddItem