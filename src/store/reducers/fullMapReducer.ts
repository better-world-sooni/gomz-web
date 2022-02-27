import { createSlice } from '@reduxjs/toolkit'
import { defaultSelectedLandCoordinates } from 'src/modules/constants'

const fullMapSlice = createSlice({
  name: 'fullMap',
  initialState: {
    selectedLandCoordinates: defaultSelectedLandCoordinates
  },
  reducers: {
    setSelectedMap(state, action) {
        state.selectedLandCoordinates = action.payload
    }
  },
})

export const fullMapReducer = fullMapSlice.reducer
export const fullMapActions = fullMapSlice.actions
