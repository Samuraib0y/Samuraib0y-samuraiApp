import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import loginReducer from "./login-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    usersReducer,
    loginReducer,
    form: formReducer,
    appReducer
})



// let store = createStore(reducers, applyMiddleware(thunk));


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)
));











window.store = store;






export default store;