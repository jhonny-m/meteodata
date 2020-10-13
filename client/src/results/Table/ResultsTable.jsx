import React, { useState } from 'react';
import resultsTableStyles from './ResultsTable.module.css';
import ResultsHeader from './ResultsHeader';
import ResultsRow from './ResultsRow';

// const results = [
// 	{
// 		cityName: 'Porto',
// 		sunriseDate: 1602398508,
// 		sunsetDate: 1602439202,
// 		temperature: 291.54},
// 	{
// 		cityName: 'Aveiro',
// 		sunriseDate: 1602398493,
// 		sunsetDate: 1602439237,
// 		temperature: 290.62
// 	},
// 	{
// 		cityName: 'Braga',
// 		sunriseDate: 1602398483,
// 		sunsetDate: 1602439137,
// 		temperature: 289.82
// 	}
// ];

function compare(a,b){
	if(a===b) return 0;
	else return a>b ? 1 : -1;
}

function orderBy(array, key, order){
	return order==='asc'?array.sort((a, b)=>compare(a[key],b[key])):array.reverse((a, b)=>compare(a[key],b[key]));
}

function ResultsTable({results}) {
	const [resultsState, setResultsState]= useState([...results]);
	function orderResults(key, order){
		const orderedResults = orderBy(resultsState, key, order);
		setResultsState([...orderedResults]);
	}
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
export default ResultsTable;