import React, { useState } from 'react';
import '../App.css';
import CityInputForm from './CityInputForm';

function CitiesSearch() {    
	const [cities, setCities] = useState([]); 
    
	const handleCitiesSearchSubmit = function(){
		fetch('http://localhost:3001/search?'+cities.reduce((acc, city,index)=>{
			return acc+'cities'+'='+city+ (index<cities.length-1?'&':'');
		},'')).then((response)=> {
			return response.json();
		}).then(data=>{
			console.log(data);
		});
	};
	const handleCityInputFormSubmit=function(values){
		setCities([...cities, values.cityInput]);
	};
	
	return (
		<div>
			<CityInputForm handleCityInputFormSubmit={handleCityInputFormSubmit}/>
			<ul>
				{cities.map((city)=><li key={city}>{city}</li>)}
			</ul>   
			<button onClick={handleCitiesSearchSubmit}>Search</button>
		</div>
	);
}

export default CitiesSearch;