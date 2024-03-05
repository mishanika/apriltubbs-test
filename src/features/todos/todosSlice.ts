import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

type Todo = {
  name: string
  place: string
  time: string
  status: boolean
}

const localState = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos') || '')
  : null
const initialState: TodosState = {
  todos: localState || [
    {
      name: 'asdasd',
      place: 'action.payload.place',
      time: '12',
      status: true,
    },
  ],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push({
        name: action.payload.name,
        place: action.payload.place,
        time: action.payload.time,
        status: false,
      })
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    markTodo: (state, action: PayloadAction<number>) => {
      state.todos[action.payload].status = !state.todos[action.payload].status
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
  },
})

export const { addTodo, markTodo, deleteTodo } = todosSlice.actions

export const selectTodos = (state: RootState): Todo[] => state.todo.todos

export default todosSlice.reducer

export interface TodosState {
  todos: Todo[]
}
