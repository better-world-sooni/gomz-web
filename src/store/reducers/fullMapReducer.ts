import { createSlice } from '@reduxjs/toolkit'

const fullMapSlice = createSlice({
  name: 'fullMap',
  initialState: {
    selectedLandId: null
  },
  reducers: {
    setSelectedMap(state, action) {
        state.selectedLandId = action.payload
    }
  },
})

export const fullMapReducer = fullMapSlice.reducer
export const fullMapActions = fullMapSlice.actions
