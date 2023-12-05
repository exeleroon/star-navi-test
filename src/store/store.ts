import {combineReducers, configureStore} from "@reduxjs/toolkit";
import squareReducer from "./reducers/SquareReducer";
import {squareAPI} from "../service/SquareAppService";

const rootReducer = combineReducers({
    squareReducer,
    [squareAPI.reducerPath]: squareAPI.reducer
})

export const setupStore = () => {
        return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(squareAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']