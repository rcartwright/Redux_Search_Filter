var React = require('react');
var render = require('react-dom').render;
var { combineReducers, createStore } = require('redux');
var { connect, Provider } = require('react-redux');
var { reducer, reduxForm } = require('redux-form');;
var formReducer = reducer;
var fields = ['search'];

var SearchFormApp = React.createClass({
	handleSubmit: function(data) {
		var { dispatch } = this.props;
    	console.log('handleSubmit initiated');
    	console.log(data);
    	alert(JSON.stringify(data));
	},
  	render: function() {
  		return (
      		<div>
        		<SearchForm onSubmit={this.handleSubmit} />
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
	          		<label className="col-xs-4 control-label">First Name</label>
	          		<div className="col-xs-8">
	            		<input type="text" className="form-control" placeholder="First Name" {...firstName}/>
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

var store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);