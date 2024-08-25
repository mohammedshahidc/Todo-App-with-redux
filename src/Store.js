import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";

export const TodoStore=configureStore({
    reducer:{
        todo:TodoSlice
    }
})