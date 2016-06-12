"use strict";

var React = require('react');
var render = require('react-dom').render;

var SearchContainer = require('./search/SearchContainer');

var App = React.createClass({
  render: function() {
    return (
      <div>
      	hi
          {this.props.children}
      </div>
    )
  }
});

render((
  <App />
), document.getElementById("app"));