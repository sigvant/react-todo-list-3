import React from 'react'

function TodoInput({item, handleChange, handleSubmit, editItem}) {
    
    return (
        <div className="card card-body my-3">
            <form action="" onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"></i>
                        </div>
                    </div>
                    <input 
                        value={item} 
                        onChange={handleChange}
                        ype="text" 
                        className="form-control text-capitalize" 
                        placeholder='add a todo item'
                    />
                </div>
                <button type='submit' 
                    className=
                    { // yes we can do conditional inside the class, which makes it super easy
                        editItem
                            ? 'btn btn-success w-100 mt-3'
                            : 'btn btn-primary w-100 mt-3'
                    }
                >
                {
                    /* here is the conditional rendering taking place */
                    editItem ? 'edit item' : 'add item'                
                }
                </button>
            </form>
        </div>
    )
}

export default TodoInput
