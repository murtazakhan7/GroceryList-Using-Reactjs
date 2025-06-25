import './App.css';
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'
import AddItem from './AddItem.js';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem.js';
import Operations from './Operations.js';
function App() {

  const API_URL = 'http://localhost:3500/items'


  const [items, setItems]  = useState([])

  const [Error,SetError] = useState('null')

  useEffect(() =>{
    const fetchItems = async () =>{
      try{
    const response =  await fetch(API_URL)
    console.log(response)
    if(!response){
      throw Error("No Data Recieved")
    }
    const data = await response.json()
    setItems(data)
   SetError('null')

      }
      catch(err){
        SetError(err)
      }

    }
      ( async () => await fetchItems())()

  }, [] )


  
  const [search, SetSearch] = useState('')

  
  const handleCheck = async (id) =>{
     const itemList = items.map(item => item.id === id ? {...item, checked : !item.checked} : item )
  
      setItems(itemList)

      const MyItem = items.filter((item) => item.id === id)

      const CheeckObj = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({checked: !MyItem[0].checked})
      }
      const URL =  `${API_URL}/${id}`
      const result = await Operations(URL,CheeckObj)
      if(result){
        console.log(result)
        SetError(result)
      }
  
  }

  
  const handleDelete =  async (id) => {
      const ListItems = items.filter(item => item.id !== id)
      setItems(ListItems)
      const DeleteObj  = {
      method : 'DELETE',
      }

      const URL =  `${API_URL}/${id}`
      const result = await Operations(URL,DeleteObj)
      if(result){
        console.log(result)
        SetError(result)
      }

  }

  const [NewItem,setNewItem] = useState('')

  const addNewItem =  async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    item = {id,checked:false,item:item}
    const ListItems = [...items,item]
    setItems(ListItems)
 
    const additemObj = {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
      body: JSON.stringify(item)
  };

  const result = await Operations(API_URL,additemObj) 
  if(result){
        console.log(result)
        SetError(result)
      }

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
    <SearchItem 
    search={search}
    SetSearch={SetSearch}
    />
    <AddItem 
    NewItem = {NewItem}
    setNewItem = {setNewItem}
    addNewItem = {addNewItem}
    handleSubmit={handleSubmit}
    />
    <Content 
    items = {items.filter(item => ((item.item).toLocaleLowerCase().includes(search.toLocaleLowerCase())))}
    setItems = {setItems}
    handleCheck = {handleCheck}
    handleDelete = {handleDelete} 
    Error ={Error}/>
    <Footer 
    items = {items}
    Error= {Error}
    />
 
    </div>
  );
}

export default App;
