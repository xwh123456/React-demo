import { combineReducers } from "redux";
import todos from "./todo";
import fileter from "./fileter";
import text from "./text";

export default combineReducers({
  todos,
  fileter,
  text
});
