import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import resultsTableStyles from './ResultsTable.module.css';
import ResultsHeader from './ResultsHeader';
import ResultsRow from './ResultsRow';



export function compare(a,b){
	if(a===b) return 0;
	else return a>b ? 1 : -1;
}

export function orderBy(array, key, order){
	return order==='asc'?array.sort((a, b)=>compare(a[key],b[key])):array.reverse((a, b)=>compare(a[key],b[key]));
}

function ResultsTable({results}) {
	const [resultsState, setResultsState]= useState([]);
	function orderResults(key, order){
		const orderedResults = orderBy(resultsState, key, order);
		setResultsState([...orderedResults]);
	}

	useEffect(()=>{
		setResultsState([...results]);
	},[results]);
	
	return (
		<table className={resultsTableStyles.table}>
			<thead>
				<ResultsHeader onOrderClick={orderResults}/>  
			</thead>
			<tbody>
				{resultsState.map(cityData=><ResultsRow key={cityData.cityName} cityData={cityData}/>)}
			</tbody>
		</table>
	);
    
}

ResultsTable.propTypes={
	results:PropTypes.array.isRequired,
};

export default ResultsTable;