
import { createStore } from 'redux';
import { applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const initialState = [];

// const store = createStore(reducer, applyMiddleware(thunk));
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


function reducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case "getTabs":
            console.log(action.type);
            return { ...state, tabs: [...state, action.payload] };
        case "getTabA":
            return { ...state, tabA: [...state, action.payload] };
        case "getTabB":
            return { ...state, tabB: [...state, action.payload] };
        default:
            return state;
    }
}

export default store;