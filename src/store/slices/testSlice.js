import { createSlice } from '@reduxjs/toolkit'

const testSlice = createSlice({
  name: 'test',
  initialState: {
    data: ['123']
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload
    }
  }
})

export const testSliceActions = testSlice.actions

export default testSlice.reducer
