import React, { Component } from "react";

export default class AddToDo extends Component {
  

  render() {
    return (
      <div>
        <input value={this.props.text} onChange={this.changetext} />
        <button onClick={this.addtodolist}>添加</button>
      </div>
    );
  }

  changetext = (e) => {
  this.props.addtext(e.target.value)
  };

  addtodolist = () => {
    this.props.addTodo(this.props.text)
  };
}
