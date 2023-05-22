
import { createStore } from 'redux';

const initialState = [{}]

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case "getTabs":
            return { ...state, tabs: action.payload };
        case "getTabA":
            return { ...state, tabA: action.payload };
        case "getTabB":
            return { ...state, tabB: action.payload };
        default:
            return state;
    }
}

export default store;