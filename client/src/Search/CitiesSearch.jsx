import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CityInputForm from './CityInputForm';
import CityList from './CityList';
import CitiesSearchStyles from './CitiesSearch.module.css';
import {citiesSearchUrlBuilder, handleGetRequest} from './Utils/SearchRequestUtils';
import {ReactComponent as LoadingLogo} from '../logo.svg';


function CitiesSearch({handleSearchResponse}) {    
	const [cities, setCities] = useState([]); 
	const [isFetching, setIsFetching]=useState(false);
	const [showError, setShowError]=useState(false);
	function handleCityInputFormSubmit(values){
		setCities([...cities, values.cityInput]);
	}
	function handleCityItemRemove(city){
		cities.splice(cities.indexOf(city), 1);
		setCities([...cities]);
	}
	function handleCitiesSearchSubmit(){
		const url = citiesSearchUrlBuilder(cities);
		setIsFetching(true);
		setShowError(false);
		handleGetRequest(url, data=>{setIsFetching(false);handleSearchResponse(data);},handleError);

	}
	function handleError(){
		setIsFetching(false);
		setShowError(true);
	}
	const isSearchDisabled = cities.length<3;
	const searchButtonClassName = `${CitiesSearchStyles.searchButton} ${isSearchDisabled && CitiesSearchStyles.searchButtonDisabled}`;
	const isCitiesEmpty = cities.length ===0;
	const showSearchButton= !isCitiesEmpty && !isFetching;
	const showLoading = isFetching;
	return (
		<div className={CitiesSearchStyles.container}> 
			<CityInputForm handleCityInputFormSubmit={handleCityInputFormSubmit}/>
			<CityList handleCityItemRemove={handleCityItemRemove} cities={cities}/>
			{showSearchButton&&<button 
				title={isSearchDisabled?'Add at least 3 cities': 'Search temperatures'}
				disabled={isSearchDisabled} 
				onClick={handleCitiesSearchSubmit} 
				className={searchButtonClassName}>
				Search
			</button>}
			{
				showLoading&& <LoadingLogo data-testid="loading" className={CitiesSearchStyles.loading}/>
			}
			{
				showError && <p className={CitiesSearchStyles.errorMessage}>Search Failed! invalid city name</p>
			}
		</div>
	);
}

CitiesSearch.propTypes={
	handleSearchResponse:PropTypes.func.isRequired,
};


export default CitiesSearch;