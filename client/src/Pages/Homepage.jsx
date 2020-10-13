import React, { useState } from 'react';
import PropTypes from 'prop-types';
import homepageStyles from './Homepage.module.css';
import CitiesSearch from '../Search/CitiesSearch';
import ResultsTable from '../Results/Table/ResultsTable';
import ResultsGraph from '../Results/Graph/ResultsGraph';

function ResultsBody({results}){
	return (
		<div className={homepageStyles.container}>
			<ResultsGraph results={results}/>
			<ResultsTable results={results}/>
		</div>
	);

}
ResultsBody.propTypes={
	results:PropTypes.array.isRequired,
};

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
