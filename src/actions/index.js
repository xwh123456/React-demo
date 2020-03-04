import {
  ADD_TODO,
  MODIFY_TODO,
  FILTERTODO,
  SET_FILETER,
  ADD_TEXT
} from "./actionType";

/**
 * 新增待办事项
 */
let nextid = 0;

const fetchTodosRequest = () => ({
  type: "FETCH_TODOS_REQUEST"
});
const fetchTodosSuccess = data => ({
  type: "FETCH_TODOS_SUCCESS",
  data
});
const fetchTodosFailure = error => ({
  type: "FETCH_TODOS_FAILURE",
  error
});

export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodosRequest());
    return fetch("./mock/todos.json").then(
      response => {
        response.json().then(data => {
          dispatch(fetchTodosSuccess(data));
        });
      },
      error => {
        dispatch(fetchTodosFailure(error));
        console.log("error:" + error);
      }
    );
  };
};

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextid++,
  text
});

/**
 * 更改待办事项
 * @param {}} id
 */

export const modifytodo = id => ({
  type: MODIFY_TODO,
  id
});

/**设置过滤状态 */
export const filtertodos = fileter => ({
  type: FILTERTODO,
  fileter
});

export const setvisibilityFileter = fileter => ({
  type: SET_FILETER,
  fileter
});
/**
 * 设置文本
 */
export const addtext = text => ({
  type: ADD_TEXT,
  text
});
