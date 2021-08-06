import { createStore } from "redux";
import userFormReducer from "../reducers/formReducer";

const store = createStore(userFormReducer);

export default store;
