import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import uuidv1 from "uuid";

const mapDispatchToProps = dispatch => {
  return {
    addFormArticle: article => dispatch(addArticle(article))
  };
};

// Class Component  (can have state)
// Traditional use via React.createClass()
// ES6 can use class that extends React.Component

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // class methods
  handleChange(event) {
    // {'title': "Title"}
    console.log(this);
    this.setState({ [event.target.id]: event.target.value });
    // this.setState((prevState) => {
    //   count: prevState.count +1
    // });
  }
  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    // const title = this.state.title
    const { title } = this.state;
    const id = uuidv1();
    // {title: "Test1", id: "8482"}
    this.props.addFormArticle({ title, id });
    this.setState({ title: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="col-xs-12 nop">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;

/*
  render() {
    return (
      <button onClick={this.handleClick.bind(this)}/>
    );
  }

  render() {
    var handleClick = this.handleClick.bind(this);
    return (
      <button onClick={handleClick}/>
    );
  }

    render() {
    return (
      <button onClick={() => this.handleClick()}/>
    );
  }


*/