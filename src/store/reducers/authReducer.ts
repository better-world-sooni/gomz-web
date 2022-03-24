import { createSlice } from '@reduxjs/toolkit'
import { KAIKAS, KLIP } from 'src/modules/constants'

// const klaytn = (typeof window == 'undefined') ? null : window["klaytn"]

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    walletType: null,
    klaytnAddress: null,
  },
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload
    },
    setKlaytnAddress(state, action) {
        state.klaytnAddress = action.payload
    },
    login(state, action) {
        const {address, walletType} = action.payload
        state.klaytnAddress = address
        state.walletType = walletType
        state.isLoggedIn = true
    }
  },
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
