import React, { Component } from "react";
import { connect } from "react-redux";
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

export default class ListItem extends Component {
  constructor() {
    super();

    this.state = {
      editing: false,
      newTitle: ""
    };
    console.log("Constructed ListItem.js");
  }

  handleEditingToggle() {
    let editing = !this.state.editing;
    let newTitle = this.props.item.title;
    this.setState({ editing, newTitle });
  }

  handleInputChange(event) {
    console.log("Change event:", event);
    this.setState({ [event.target.id]: event.target.value });
  }

  handleEditingBlur(event) {
    let editing = false;
    this.setState({ editing });
  }

  handleKeyPress(event, id) {
    if (event.key == "Enter") {
      console.log(id + " -> " + event.target.value);
      this.props.onRename(id, event.target.value);
      this.setState({ editing: false });
    }
  }

  handleDragEvent(e) {
    console.log("Drag event:", e);
  }

  render() {
    const element = this.props.item;
    // console.log("Element:", element);
    // console.log("Props:", this.props);
    // console.log("On remove", this.props.onRemove);
    if (this.state.editing) {
      // console.log("*****");
      // console.log("Editing:", this.state.editing);
      // console.log("*****");
    }

    const elementTitle = (
      <span
        className="col-xs-8 nop"
        onDoubleClick={() => this.handleEditingToggle()}
      >
        {element.title}
      </span>
    );
    const elementInput = (
      <div className="col-xs-8 nop list-input">
        <input
          type="text"
          id="newTitle"
          autoFocus={this.state.editing}
          onKeyPress={(e, id) => this.handleKeyPress(e, element.id)}
          onBlur={() => this.handleEditingBlur()}
          value={this.state.newTitle}
          onChange={e => this.handleInputChange(e)}
        />
      </div>
    );

    return (
      <li className="list-group-item col-xs-12" key={element.id} draggable="true" onDragStart={(e, id) => this.handleKeyPress(e, element.id)} onDrop={(e, id) => this.handleKeyPress(e, element.id)} onDragOver={event.preventDefault()} onDragEnd={(e, id) => this.handleKeyPress(e, element.id)}>
        {this.state.editing ? elementInput : elementTitle}
        <div className="col-xs-4 nop">
          <div className="pull-right">
            <span
              className="glyphicon glyphicon-pencil"
              aria-hidden="true"
              onClick={() => this.handleEditingToggle()}
            />
            <span
              className="glyphicon glyphicon-remove"
              aria-hidden="true"
              onClick={() => this.props.onRemove(element.id)}
            />
          </div>
        </div>
      </li>
    );
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
