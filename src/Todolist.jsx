import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, edittodo } from './TodoSlice'

const Todolist = () => {
    const todos = useSelector(state => state.todo.todo)
    const dispatch = useDispatch()
    const [editindex, setEditindex] = useState(null)
    const [newtask, setNewtask] = useState('')

    const handleEdit = (index, task) => {
        setEditindex(index)
        setNewtask(task)
    }

    const handleupdate = (index) => {
        dispatch(edittodo({ index, newtask }))
        setEditindex(null)
    }

    return (
        <div className='container text-center'>
            {todos.map((todo, index) => (
                <div
                    key={index}
                    className="w-75 w-sm-100 h-auto bg-dark text-center mx-auto p-4 my-3"
                >
                    {editindex === index ? (
                        <>
                            <input
                                type="text"
                                value={newtask}
                                onChange={(e) => setNewtask(e.target.value)}
                                className="border rounded-pill border-3 border-warning me-3 p-2 flex-grow-1"
                            />
                            <button
                                className="bg-warning border border-2 rounded-pill border-primary hover:bg-dark cursor-pointer me-2"
                                onClick={() => handleupdate(index)}
                            >
                                Update
                            </button>
                            <button
                                className="bg-warning border border-2 rounded-pill border-primary hover:bg-dark cursor-pointer"
                                onClick={() => setEditindex(null)}
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <h6 className="bg-light flex-grow-1 border rounded-pill border-3 border-warning p-2 me-3">
                                {todo.task}
                            </h6>
                            <button
                                className="bg-warning border border-2 rounded-pill border-primary hover:bg-dark cursor-pointer me-2"
                                onClick={() => handleEdit(index, todo.task)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-warning border border-2 rounded-pill border-primary hover:bg-dark cursor-pointer"
                                onClick={() => dispatch(deleteTodo(index))}
                            >
                                Delete
                            </button>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Todolist
