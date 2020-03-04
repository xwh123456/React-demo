import { connect } from "react-redux";
import ToDoList from "../components/ToDoList";
import {modifytodo,fetchTodos} from '../actions'
const filtertodos = (todos, fileter) => {
  switch (fileter) {
    case "All":
      return todos;
    case "Completed":
      return todos.filter(t => !t.complted);
    case "Active":
      return todos.filter(t => t.complted);
      default:
          return new Error("Unkonwn fileter")
  }
};

const mapStateToPoops = state => ({
  todos: filtertodos(state.todos.data,state.fileter)
});

const mapDispatchToProps = (dispatch) => ({
    
    modifytodo:id=>dispatch(modifytodo(id)),
    fetchTodos:()=>dispatch(fetchTodos())

});

export default connect(mapStateToPoops, mapDispatchToProps)(ToDoList);
