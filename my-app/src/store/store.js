import {createStore,combineReducers,applyMiddleware} from "redux";
import {newsReducer} from "../Reducers/news-reducer";
import thunk from "redux-thunk";
import {todoReducer} from "../Reducers/todo-reducer";

let reducers = combineReducers({
    newsPage: newsReducer,
    todoPage: todoReducer
})

let store = createStore(reducers,applyMiddleware(thunk));

export default store;