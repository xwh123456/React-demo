import React, { Component } from "react";


import AddTodoContainer from '../containers/AddTodoContainer'
import FooterContainer from '../containers/FooterContainer'
import TodoListContainer from '../containers/TodoListContainer'
export default class APP extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     todos: [],
  //     fileter: "All"
  //   };
  //   this.DefaultId = 1;
  // }

  render() {
    // const todos = this.filtertodos();
    // console.log(todos)
    // const { fileter } = this.props;

    return (
      <div>
     <AddTodoContainer/>
     <TodoListContainer/>
      <FooterContainer/>
      </div>
    );
  }

//   addtodo = text => {
//     const newone = {
//       id: this.DefaultId++,
//       text,

//       complted: false
//     };

//     const combintolist = [newone, ...this.state.todos];

//     this.setState  ({
//       todos: combintolist
//     });



//   };

//   filtertodos = () => {
//     const currentfileter = this.state.fileter;

//  return   this.state.todos.filter(item => {
//       if (currentfileter === "All") {
//         return true;
//       } else if (currentfileter === "Active") {
//         return !item.complted;
//       } else {
//         return item.complted;
//       }
//     });

   
//   };

//   modifytodo = id => {
//     const newTodos = this.state.todos.map(item => {
//       return item.id === id ? {...item,complted:!item.complted}: item;
//     });

//     this.setState({
//       todos: newTodos
//     });
//   };

//   setvisibilityFileter = fileter => {
//     this.setState({
//       fileter
//     });
//   };
}
 