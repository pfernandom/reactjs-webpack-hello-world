var React = require('react');
var ReactDOM = require('react-dom')

var Header = require('./header');

var Main = React.createClass({
	render:function(){
		return (
			<div>
			<Header></Header>
			<div>Hello World </div>
			</div>
		)
	
	}
});

ReactDOM.render(<Main/>, document.getElementById('app'));