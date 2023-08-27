import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { weatherReducer } from './weatherSlice'

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  }
})

export default store;

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>