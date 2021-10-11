import React from 'react'
import TodoItem from './TodoItem'

function TodoList({items, handleClearList, handleDelete, handleEdit}) {
    return (
        <div>
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo List</h3>
                {
                    items.map(item => (
                        <TodoItem
                            key={item.id}   
                            name={item.item}
                            handleDelete={() => handleDelete(item.id)}
                            // we need to pass the id as well! so we do it with arrow func (this is prop drilling)
                            handleEdit={() => handleEdit(item.id)}
                            // we need to pass the id as well! so we do it with arrow func (this is prop drilling)
                        />
                    ))
                }
                <button onClick={handleClearList} type='button' className='btn btn-danger btn-block text-capitalize mt-5'>Clear List</button>
            </ul>
        </div>
    )
}

export default TodoList
