"use strict";
var React = require('react');
var render = require('react-dom').render;
var combineReducers = require('redux').combineReducers;
var createStore = require('redux').createStore;
var connect = require('react-redux').connect;
var Provider = require('react-redux').Provider;
var reducer = require('redux-form').reducer;
var reduxForm = require('redux-form').reduxForm;
var formReducer = reducer;
var fields = ['search'];
var stuff = {"name": "rachel"}

var SearchFormApp = React.createClass({
	handleSubmit: function(data) {
		var dispatch = this.props.dispatch;
    	console.log('handleSubmit initiated');
    	console.log(data);
    	//alert(JSON.stringify(data));

	},
  	render: function() {
  		return (
      		<div>
        		<SimpleForm {...this.props} onSubmit={this.handleSubmit} />
      		</div>
    	);
  	}
});

var SearchForm = React.createClass({
  	render: function() {
    	var {fields: {search}, handleSubmit} = this.props;
	   	return (
	    	<form className="form-horizontal" onSubmit={handleSubmit}>
	        	<div className="form-group">
	          		<label className="col-xs-4 control-label">Search</label>
	          		<div className="col-xs-8">
	            		<input type="text" className="form-control" placeholder="search" {...search} />
	          		</div>
	        	</div>
	        	<div className="text-center">
	          		<button type="submit" className="btn btn-primary btn-lg" style={{margin: 10}}>
	            		Submit
	          		</button>
	        	</div>
	      </form>
	    );
  	}
});

var SimpleForm = reduxForm({
  form: 'simple',
  fields
})(SearchForm);

function mapStateToProps(state) {
  return {
  };
}

var App = connect(mapStateToProps)(SearchFormApp)

var rootReducer = combineReducers({
  form: formReducer,
});

function configureStore() {
  var store = createStore(rootReducer);
  return store;
};

var store = configureStore()


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

//var React = require('react');
//var render = require('react-dom').render;

//var SearchContainer = require('./search/SearchContainer');

/*var App = React.createClass({
  render: function() {
    return (
      <div>
      	hi
          <SearchFormApp {...this.props} />
      </div>
    )
  }
});

render((
  <App stuff={stuff} />
), document.getElementById("app"));*/