import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
const Content = () => {
const [items, setItems]  = useState([
    {
        id: 1,
        checked: false,
        item : "almonds"
    },
    {
        id: 2,
        checked: true,
        item : "cookies"
    },
    {
        id: 3,
        checked: true,
        item : "chocolate cake"
    }
])

const handlecheck = (id) =>{
   const itemList = items.map(item => item.id === id ? {...item, checked : !item.checked} : item )

    setItems(itemList)


}
  return (
    <main>
        {items.map(item => (
             
            <li  style = {{listStyle : 'none'}} key = {item.id}>
            <input 
            type="checkbox" 
            
            checked={item.checked}
            onChange={() => handlecheck(item.id)}
            />     
           {item.item}
            <FaTrashAlt />
              </li>
          
        ))}
    </main>
  )
}

export default Content