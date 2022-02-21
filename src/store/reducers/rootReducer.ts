import { combineReducers } from '@reduxjs/toolkit'
import { appReducer } from './appReducer'
import { authReducer } from './authReducer'
import { fullMapReducer } from './fullMapReducer'
import { modalReducer } from './modalReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  modal: modalReducer,
  fullMap: fullMapReducer,
})

export type RootState = {
  app: ReturnType<typeof appReducer>
  auth: ReturnType<typeof authReducer>
  modal: ReturnType<typeof modalReducer>
  fullMap: ReturnType<typeof fullMapReducer>
}