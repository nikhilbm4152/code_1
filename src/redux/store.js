import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import valueReducer from "./reducers";

const store = createStore(valueReducer, composeWithDevTools());

export default store;
