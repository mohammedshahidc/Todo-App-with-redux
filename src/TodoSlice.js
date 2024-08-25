import {createSlice} from '@reduxjs/toolkit'


const initialstate={
    todo:[]
}
const TodoSlice= createSlice({
    name:'todo',
    initialState:initialstate,
    reducers:{
        addtodo:(state,action)=>{
            state.todo.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todo = state.todo.filter((_, index) => index !== action.payload)
        }
    }


})

export default TodoSlice.reducer
export const{addtodo,deleteTodo}=TodoSlice.actions