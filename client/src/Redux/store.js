import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './usersSlice'
import animeSlice from './animeSlice'

export const store = configureStore({
  reducer: {
    Users:usersSlice,
    animes:animeSlice
  },
})