var React = require('react');

const WeatherMessage = (props) => {
	var {temp, location} = props;

	return (
		<h3>It is {temp} in {location}.</h3>
	)
}

module.exports = WeatherMessage; 