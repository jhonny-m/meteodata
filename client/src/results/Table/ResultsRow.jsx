import React from 'react';
import PropTypes from 'prop-types';
import resultsTableStyles from './ResultsTable.module.css';
import {timeParser} from '../TimeUtils';


function ResultsRow({cityData}) {
	const{cityName, temperature, sunsetDate,sunriseDate}= cityData; 
	return (
		<tr className={resultsTableStyles.tableRow}>
			<td className={resultsTableStyles.tableCell}>{cityName}</td>  
			<td className={resultsTableStyles.tableCell}>{temperature}</td>  
			<td className={resultsTableStyles.tableCell}>{timeParser(sunriseDate)}</td>  
			<td className={resultsTableStyles.tableCell}>{timeParser(sunsetDate)}</td>  
		</tr>
	);
}

ResultsRow.propTypes={
	cityData:PropTypes.object.isRequired,
};

export default ResultsRow;