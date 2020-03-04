import { ADD_TODO, MODIFY_TODO } from "../actions/actionType";

const initialState = {
  isFetching: false,
  error: null,
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_REQUEST":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    case "FETCH_TODOS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: state.error
      };
    default:
      return {
        ...state,

        data: todo(state.data, action)
      };
  }
};

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          complted: false,
          id: action.id
        }
      ];

    case MODIFY_TODO:
      return state.map(item => {
        return item.id === action.id
          ? { ...item, complted: !item.complted }
          : item;
      });

    default:
      return state;
  }
};
export default reducer;
