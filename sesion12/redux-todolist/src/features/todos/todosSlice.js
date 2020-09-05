import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action){
        const { id, text} = action.payload
        state.push({id: nextTodoId++, text: action.payload, completed: false})
      }
    }
  }
})

export const { addTodo } = todosSlice.actions
export default todosSlice.reducer
