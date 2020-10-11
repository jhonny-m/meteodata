import React from 'react';
import '../App.css';

function ResultsRow(cityData) {
	const{sunsetDate,sunriseDate}= cityData;
    
	const sunrise = new Date(sunriseDate);
	console.log(new Date(sunsetDate*1000));
	console.log(sunrise);
	return (
		<tr>
			<td>{cityData.cityName}</td>  
			<td>{cityData.temperature}</td>  
			{/* <td>{new Date(cityData.sunriseDate).parse()}</td>  
			<td>{new Date(cityData.sunsetDate).parse()}</td>   */}
		</tr>
	);
}

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