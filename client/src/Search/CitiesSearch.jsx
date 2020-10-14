import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CityInputForm from './CityInputForm';
import CityList from './CityList';
import CitiesSearchStyles from './CitiesSearch.module.css';
import {citiesSearchUrlBuilder, handleGetRequest} from './Utils/SearchRequestUtils';


function CitiesSearch({handleSearchResponse}) {    
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
		handleGetRequest(url, data=>handleSearchResponse(data));

	}
	const isSearchDisabled = cities.length<3;
	const searchButtonClassName = `${CitiesSearchStyles.searchButton} ${isSearchDisabled && CitiesSearchStyles.searchButtonDisabled}`;
	const isCitiesEmpty = cities.length ===0;
	return (
		<div className={CitiesSearchStyles.container}> 
			<CityInputForm handleCityInputFormSubmit={handleCityInputFormSubmit}/>
			<CityList handleCityItemRemove={handleCityItemRemove} cities={cities}/>
			{!isCitiesEmpty&&<button 
				title={isSearchDisabled?'Add at least 3 cities': 'Search temperatures'}
				disabled={isSearchDisabled} 
				onClick={handleCitiesSearchSubmit} 
				className={searchButtonClassName}>
				Search
			</button>}
		</div>
	);
}

CitiesSearch.propTypes={
	handleSearchResponse:PropTypes.func.isRequired,
};


export default CitiesSearch;