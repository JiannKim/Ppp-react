import React, { Component } from 'react';
import '../App.css';

class Kakao_clone extends Component {
  render() {
    return (
      <div>
      <h1><a href="/" onClick={function(e){
        e.preventDefault();
        this.props.onChangePage();
      }.bind(this)}>{this.props.title}</a></h1>
      {this.props.sub}
        <a href="/">
          <h1>Kakao_clone-JM</h1>
        </a>
      </div>
    );
  }
}

export default Kakao_clone;