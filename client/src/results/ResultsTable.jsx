import React from 'react';
import '../App.css';
import ResultsRow from './ResultsRow';


function ResultsTable() {
	const results = [
		{
			cityName: 'Porto',
			sunriseDate: 1602398508,
			sunsetDate: 1602439202,
			temperature: 291.54},
		{
			cityName: 'Aveiro',
			sunriseDate: 1602398493,
			sunsetDate: 1602439237,
			temperature: 290.62
		},
		{
			cityName: 'Braga',
			sunriseDate: 1602398483,
			sunsetDate: 1602439137,
			temperature: 289.82
		}
	];
    
	return (
		<table>  
			{results.map(cityData=>ResultsRow(cityData))}
		</table>
	);
    
}
export default ResultsTable;