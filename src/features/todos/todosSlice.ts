import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

type Todo = {
  name: string
  place: string
  time: string
  status: boolean
}

const initialState: TodosState = {
  todos: [
    {
      name: 'asdasd',
      place: 'action.payload.place',
      time: '12',
      status: true,
    },
    {
      name: 'asdasd',
      place: 'action.payload.place',
      time: '12',
      status: true,
    },
    {
      name: 'asdasd',
      place: 'action.payload.place',
      time: '12',
      status: true,
    },
    {
      name: 'asdasd',
      place: 'action.payload.place',
      time: '12',
      status: true,
    },
    {
      name: 'asdasd',
      place: 'action.payload.place',
      time: '12',
      status: true,
    },
    {
      name: 'asdasd',
      place: 'action.payload.place',
      time: '12',
      status: true,
    },
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
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1)
    },
    markTodo: (state, action: PayloadAction<number>) => {
      state.todos[action.payload].status = !state.todos[action.payload].status
    },
  },
})

export const { addTodo, markTodo, deleteTodo } = todosSlice.actions

export const selectTodos = (state: RootState): Todo[] => state.todo.todos

export default todosSlice.reducer

export interface TodosState {
  todos: Todo[]
}
