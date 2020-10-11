var express = require('express');
var router = express.Router();
const axios = require('axios');

const weatherRequestUrlBuilder = function(city){
	const keyParameter =  '&appid=';
	
	const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
	return baseUrl + city + keyParameter + key;
};

const getUrlRequest=function(url ){
	return axios.get(url);
};
const weatherResponseMapper = function(data){
	return {
		cityName: data.name,
		sunriseDate: data.sys.sunrise,
		sunsetDate: data.sys.sunset,
		temperature:data.main.temp
	};
};

const resolveWeatherRequestList = function(weatherRequestUrlList, callback){
	Promise.all(weatherRequestUrlList.map(url=>getUrlRequest(url))).then((values)=>{
		callback( values.map(({data})=>weatherResponseMapper(data)));
	});
};

const responseSearchRequest = function(data, res){
	res.send(data);
};

/* GET home page. */
router.get('/', function(req,res){
	const citiesList = req.query.cities;
	const weatherRequestUrlList = citiesList.map(weatherRequestUrlBuilder);
	resolveWeatherRequestList(weatherRequestUrlList,(data)=>responseSearchRequest(data,res));

});
module.exports = router;