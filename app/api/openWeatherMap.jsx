var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=68a9fe26ffbad7e8cf50a08e26ae8d3f&units=metric';


module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location); // q=London,uk
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(success, error);

		function success(res) {
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}
		function error(res) {
			console.log(res);
			throw new Error(res);
		}
	}
}