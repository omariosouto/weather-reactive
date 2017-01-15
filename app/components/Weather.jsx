var React = require('react');
var WeatherForm = require('./WeatherForm.jsx');
var WeatherMessage = require('./WeatherMessage.jsx');
var OpenWeatherMap = require('../api/openWeatherMap.jsx');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			location: 'Miami',
			temp: 88,
			isLoading: false
		}
	},
	handleSearch: function(location) {
		var self = this;
		self.setState({ isLoading: true });
		OpenWeatherMap.getTemp(location).then(
			function(temp) {
				self.setState({
					location: location,
					temp: temp,
					isLoading: false
				})
			},
			function(errorMessage) {
				alert(errorMessage);
				self.setState({ isLoading: false });
			}
		);
	},
	render: function() {
		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch} />
				{ this.state.isLoading && <div>Loading...</div> }
				<WeatherMessage location={this.state.location} temp={this.state.temp} />
			</div>
		)
	}

})

module.exports = Weather; 