import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'
import filterReducer from '../features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    todo: todosReducer,
    filter: filterReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
