import {configureStore} from '@reduxjs/toolkit'
import amazonReducer from './amazonSlice'
import userReducer from './userSlice'


export interface RootState {
    amazon: ReturnType<typeof amazonReducer>;
    user: ReturnType<typeof userReducer>;
  }

export default configureStore({
    reducer:{
        articles:amazonReducer,
        user:userReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['article/setUser'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.email'],
        // Ignore these paths in the state
        // ignoredPaths: ['items.dates'],
      },
    }),
})