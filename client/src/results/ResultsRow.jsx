import React from 'react';
import '../App.css';
import {timeParser} from './TimeUtils';



function ResultsRow(cityData) {
	const{cityName, temperature, sunsetDate,sunriseDate}= cityData; 
	return (
		<tr>
			<td>{cityName}</td>  
			<td>{temperature}</td>  
			<td>{timeParser(sunriseDate)}</td>  
			<td>{timeParser(sunsetDate)}</td>  
		</tr>
	);
}

export default ResultsRow;