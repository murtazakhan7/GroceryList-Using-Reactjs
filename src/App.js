import './App.css';
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'
import AddItem from './AddItem.js';
import { useState } from 'react';
function App() {


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
  
  
  
  const handleCheck = (id) =>{
     const itemList = items.map(item => item.id === id ? {...item, checked : !item.checked} : item )
  
      setItems(itemList)
  
  }
  
  const handleDelete = (id)=>{
      const ListItems = items.filter(item => item.id !== id)
      setItems(ListItems)
  
  }

  const [NewItem,setNewItem] = useState('')

  const addNewItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    item = {id,checked:false,item:item}
    const ListItems = [...items,item]
    setItems(ListItems)

}

const handleSubmit = (e) =>{
  e.preventDefault();
  if (NewItem){
    addNewItem(NewItem);
  }
  else{
    return
  }
  setNewItem('')

}

  return (
    <div className="App">
    <Header title = 'Grocery List'/>
    <AddItem 
    NewItem = {NewItem}
    setNewItem = {setNewItem}
    addNewItem = {addNewItem}
    handleSubmit={handleSubmit}
    />
    <Content 
    items = {items}
    setItems = {setItems}
    handleCheck = {handleCheck}
    handleDelete = {handleDelete} />
    <Footer 
    items = {items}
    />
 
    </div>
  );
}

export default App;
