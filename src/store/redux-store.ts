import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {galleryReducer} from "./galleryReducer";


let reducers = combineReducers({
 gallery: galleryReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends {[key: string]: (...arg:any[]) => infer U } ? U: never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

export type BaseThunkType<A extends Action, R = Promise<void>> =  ThunkAction<R, AppStateType, unknown, A>

export default store;