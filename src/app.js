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

var rootReducer = combineReducers({
  form: formReducer, helloReducer
});



/*var helloReducer = (state= {message:'none'}, action) => {    
 switch (action.type) {
    case 'HELLO':
      return Object.assign(state,{message:"hello world"});
    default:
      return state;
  }  
};*/

var addData = { search: 'search' }

var helloReducer = (state={search:'none'}, action) => {
  switch (action.type) {
    case 'INCREASE': return state+1
    default: return state
  }
}

function configureStore() {
  var store = createStore(rootReducer);
  return store;
};

var store = configureStore()

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    search: state
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: () => dispatch(addData)
  }
}

// Connected Component
//const App = connect(mapStateToProps, mapDispatchToProps)(Counter)
var App = connect(mapStateToProps, mapDispatchToProps)(SearchFormApp)


var SearchFormApp = React.createClass({
	handleSubmit: function(data) {
		var dispatch = this.props.dispatch;
		store.dispatch(addData(data))
		console.log(dispatch)
    	console.log('handleSubmit initiated');
    	console.log(data);
    	alert(JSON.stringify(data));

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

/*function mapStateToProps(state) {
  return {
  };
}



console.log(store)*/

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