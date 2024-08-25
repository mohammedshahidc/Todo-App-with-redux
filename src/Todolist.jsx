import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from './TodoSlice'

const Todolist = () => {
    const todos=useSelector(state=>state.todo.todo)
    const dispatch=useDispatch()
  return (
    <div className='container text-center justify-content-center'>
        {todos.map((todo,index)=>(
          <div key={index} className="w-75 h-auto bg-dark text-center justify-content-center mx-auto p-4">
          <h6 className="bg-light flex-grow-1 border rounded-pill border-3 border-warning p-2 me-3">
              {todo.task}
          </h6>
          <button className="col-auto bg-warning border border-2 rounded-pill border-primary hover:bg-dark cursor-pointer me-2">
              Edit
          </button>
          <button className="col-auto bg-warning border border-2 rounded-pill border-primary hover:bg-dark cursor-pointer" onClick={()=>dispatch(deleteTodo(index))}>
              Delete
          </button>
      </div>
      
        ))}
      
    </div>
  )
}

export default Todolist
