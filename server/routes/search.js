var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const axios = require('axios');

const weatherRequestUrlBuilder = function(city){
	const location = process.env.OWM_LOCATION;
	const path = '/weather';
	const queryStart = '?q=';
	const keyParameter =  '&appid=';
	const key = process.env.OWM_KEY;
	return location+ path + queryStart + city + keyParameter + key;
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

const resolveWeatherRequestList = function(weatherRequestUrlList, callback, next){
	Promise.all(weatherRequestUrlList.map(url=>getUrlRequest(url))).then((values)=>{
		callback( values.map(({data})=>weatherResponseMapper(data)));
	})
		.catch(()=>next(createError(500)));
};

const responseSearchRequest = function(data, res){
	res.send(data);
};

/* GET home page. */
router.get('/', function(req,res,next){
	const citiesList = req.query.cities;
	const weatherRequestUrlList = citiesList.map(weatherRequestUrlBuilder);
	resolveWeatherRequestList(weatherRequestUrlList,(data)=>responseSearchRequest(data,res),next);

});
module.exports = router;