import { combineReducers } from '@reduxjs/toolkit'
import { klaytnReducer } from './klaytnReducer'
import { modalReducer } from './modalReducer'

export const rootReducer = combineReducers({
  modal: modalReducer,
  klaytn: klaytnReducer
})

export type RootState = {
  modal: ReturnType<typeof modalReducer>
  klaytn: ReturnType<typeof klaytnReducer>
}