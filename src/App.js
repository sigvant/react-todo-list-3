import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect } from 'react'

function App() {
  const [items, setItems] = useState([])
  const [id, setId] = useState(uuidv4())
  const [item, setItem] = useState('')
  const [editItem, setEditItem] = useState(false)

  const handleChange = (e) => {
    setItem(e.target.value)
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newItem = {
      id: id,
      item: item
    }

    const updatedItems = [...items, newItem]
    setItems(updatedItems)
    setId(uuidv4())    
    setEditItem(false)
    setItem('')
  }

  const handleClearList = () => {
    setItems([])
  }

  const handleDelete = (id) => {
    const filteredItems = items.filter(item => item.id !== id)
    setItems(filteredItems)
  }

  const handleEdit = id => {
    const filteredItems = items.filter(item => item.id !== id)

    const foundItem = items.find(item => item.id === id)

    setItems(filteredItems)
    setItem(foundItem.item)
    setEditItem(true)
    // we are going to use this setEditItem to conditionally render in todoInput
    setId(id)
  }

  useEffect(() => {
    getFromLocalStorage()
  },[])

  useEffect(() => {
    saveToLocalStorage()
  }, [items])

  const saveToLocalStorage = () => {
    localStorage.setItem('items', JSON.stringify(items))
    // pushing array to local memory
  }

  const getFromLocalStorage = () => {
    if(localStorage.getItem('items') === null) {
      localStorage.setItem('items', JSON.stringify([]))
    } else {
      let itemsFromLocal = JSON.parse(localStorage.getItem('items'))
      setItems(itemsFromLocal)
    }
    // we check first then we get if there is something there
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              handleChange={handleChange}
              handleSubmit={handleSubmit}              
              item={item}
              editItem={editItem}
            />
            <TodoList
              items={items}
              handleClearList={handleClearList}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
