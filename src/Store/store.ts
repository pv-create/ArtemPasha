import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from "redux-thunk";

const rootReducer=combineReducers({

}) //здесь будет прописана логика управления состоянием первый параметр это значение состояния второй action


export  const  store=createStore(rootReducer, applyMiddleware(thunk))//сдесь будет храниться состояние приложения

export type RootState=ReturnType<typeof store.getState>;
export type AddDispatch=typeof store.dispatch;