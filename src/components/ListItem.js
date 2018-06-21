import React, { Component } from "react";

export default class ListItem extends Component {
  constructor() {
    super();

    this.state = {
      editing: false
    };
	console.log("Constructed ListItem.js");
  }

  handleEditingToggle(){
  	let editing = !this.state.editing;
  	this.setState({editing});
  }

  render() {
  	const element = this.props.item;
  	console.log("Element:",element);
  	console.log("Props:", this.props);
  	console.log("On remove", this.props.onRemove);
  	if (this.state.editing) {
  		console.log("*****");
  		console.log("Editing:", this.state.editing);
  		console.log("*****");
  	}

  	return (
    <li className="list-group-item col-xs-12" key={element.id}>
      <span className="col-xs-8 nop">{element.title}</span>
      <div className="col-xs-4 nop">
        <a
          className="pull-right nop"
          onClick={() => this.props.onRemove()}
        >
          X
        </a>
        <span onClick={() => this.handleEditingToggle()}>Edit</span>
      </div>
    </li>
    )
  }
}

/*
    const { todo, completeTodo, deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={text => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
          <button className="destroy" onClick={() => deleteTodo(todo.id)} />
        </div>
      );
    }

    return (
      <li
        className={classnames({
          completed: todo.completed,
          editing: this.state.editing
        })}
      >
        {element}
      </li>
    );
*/