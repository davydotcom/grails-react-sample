// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require jquery-2.2.0.min
//= require bootstrap
//= require_self

// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var comments = require('comments');
// tutorial8.js
var data = [
  {id: 1, author: "David Estes", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
  <comments.CommentBox data={data}/>,
  document.getElementById('example')
);