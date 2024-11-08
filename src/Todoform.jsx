import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from './TodoSlice'

const Todoform = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addtodo({ task }))
        setTask('')
    }

    return (
        <div className="container text-center d-flex justify-content-center">
            <div className="w-75 w-sm-100 h-auto bg-dark text-center mt-5 p-4 mx-auto">
                <h1 className="text-warning">TODO APP</h1>
                <div className="d-flex justify-content-center align-items-center mt-4 flex-wrap">
                    <input
                        type="text"
                        value={task}
                        className="border rounded-pill border-3 border-warning me-3 p-2 flex-grow-1"
                        placeholder="Add task"
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button
                        className="bg-warning border border-2 rounded-pill border-primary hover:bg-dark cursor-pointer px-4"
                        onClick={handleSubmit}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todoform
