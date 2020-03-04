import React, { Component } from "react";
import ToDo from "./ToDo";
export default class ToDoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { modifytodo, todos } = this.props;

    return (
      <ul>
        {todos
          ? todos.map(todo => {
              return (
                <ToDo key={todo.id} {...todo} modifytodo={modifytodo}></ToDo>
              );
            })
          : null}
      </ul>
    );
  }
}
