import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const initialState: FilterState = {
  all: true,
  completed: false,
  current: false,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      for (const i in state) {
        if (i === action.payload) {
          state[i as keyof FilterState] = true
        } else {
          state[i as keyof FilterState] = false
        }
      }
    },
  },
})

export const { changeFilter } = filterSlice.actions

export const selectFilter = (state: RootState): FilterState => state.filter

export default filterSlice.reducer

export interface FilterState {
  all: boolean
  completed: boolean
  current: boolean
}
