import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle, renameArticle } from "../actions/index";
import ListItem from "./ListItem";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
  return {
    removeArticle: id => dispatch(removeArticle(id)),
    renameArticle: (id, newName) => dispatch(renameArticle(id, newName)),
  };
};

// Functional Component (cant have state)
// const ConnectedList = ({ articles, removeArticle }) => (
//  <div>
//      <ul className="list-group list-group-flush">
//        {articles.map(el => (
//          <ListItem key={el.id} onClick={() => removeArticle(el)}/>
//        ))}
//      </ul>
//    </div>
// );

class ConnectedList extends Component {
  constructor() {
    super();
    // this.state = {
    //   title: ""
    // };
    // this.removeArticle = this.props.removeArticle.bind(this)
  }

  render() {
    console.log(this.props.articles);
    return (
      <div className="col-xs-12 nop">
        <ul className="list-group list-group-flush">
          {this.props.articles.map(el => (
            <ListItem key={el.id} item={el} onRename={(id, newName) => this.props.renameArticle(id, newName)} onRemove={(id) => this.props.removeArticle(id)} />
          ))}
        </ul>
      </div>
    );
  }
}

// <ListItem key={el.id} article={el} onClick={() => removeArticle(el)}/>
const List = connect(mapStateToProps,mapDispatchToProps)(ConnectedList);
export default List;
