import { configureStore } from '@reduxjs/toolkit'
import userSlice from './usersSlice'
import animeSlice from './animeSlice'

export const store = configureStore({
  reducer: {
    Users:userSlice,
    animes:animeSlice
  },
})