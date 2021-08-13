import { combineReducers } from "redux";
import placeDataReducer from "./placeDataReducer";
import placeReducer from "./placeReducer";
import themeReducer from "./themeReducer";
import openFormReducer from "./openFormReducer"

const rootReducer = combineReducers({
  place: placeReducer,
  placeData: placeDataReducer,
  isDarkMode: themeReducer,
  isClicked: openFormReducer,
});

export default rootReducer;
