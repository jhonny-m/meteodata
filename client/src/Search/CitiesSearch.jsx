import React, { useState } from 'react';
import '../App.css';
import CityInputForm from './CityInputForm';

const baseUrl = 'http://localhost:3001/search?';

function citiesToQuery(cities){
	return cities.reduce((acc, city,index)=>{
		const queryConnector = index<cities.length-1?'&':'';
		return `${acc}cities=${city}${queryConnector}`;
	},'');
}
function citiesSearchUrlBuilder(cities){
	return `${baseUrl}${citiesToQuery(cities)}`;
}

function handleGetRequest(url, callback){
	fetch(url).then((response)=> {
		return response.json();
	}).then(data=>{
		callback(data);
	});
}



function CityList({cities, handleCityItemRemove}){
	return(
		<ul>
			{cities.map((city)=><li key={city}>{city} <button type="button" onClick={()=>handleCityItemRemove(city)}>x</button></li>)}
		</ul>   
	);
}

function CitiesSearch() {    
	const [cities, setCities] = useState([]); 
    
	function handleCityInputFormSubmit(values){
		setCities([...cities, values.cityInput]);
	}
	function handleCityItemRemove(city){
		cities.splice(cities.indexOf(city), 1);
		setCities([...cities]);
	}
	function handleCitiesSearchSubmit(){
		const url = citiesSearchUrlBuilder(cities);
		handleGetRequest(url, data=>console.log(data));

	}
	
	return (
		<div>
			<CityInputForm handleCityInputFormSubmit={handleCityInputFormSubmit}/>
			<CityList handleCityItemRemove={handleCityItemRemove} cities={cities}/>
			<button onClick={handleCitiesSearchSubmit}>Search</button>
		</div>
	);
}

export default CitiesSearch;