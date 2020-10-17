import React, { useState } from 'react';
import homepageStyles from './Homepage.module.css';
import CitiesSearch from '../Search/CitiesSearch';
import ResultsBody from '../Results/ResultsBody';


function Homepage() {
	const [results, setResults]= useState([]);
	function handleSearchResponse (data){
		setResults([...data]);
	}
	const isResultsEmpty = results.length ===0;
	return (
		<div className={homepageStyles.container}>
			
			<div className={homepageStyles.citySearchContainer}>
				<CitiesSearch handleSearchResponse={handleSearchResponse}/>
			</div>
			{!isResultsEmpty && <ResultsBody results={results}/>}
			
		</div>
	);
}

export default Homepage;
