import React from 'react';
import '../App.css';
import CitiesSearch from '../shared/CitiesSearch';
import ResultsTable from '../results/ResultsTable';



function Homepage() {

	return (
		<div className="Homepage">
			<CitiesSearch />
			<ResultsTable/>
		</div>
	);
}

export default Homepage;
