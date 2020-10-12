import React from 'react';
import '../App.css';
import CitiesSearch from '../Search/CitiesSearch';
import ResultsTable from '../Results/Table/ResultsTable';
import ResultsGraph from '../Results/Graph/ResultsGraph';



function Homepage() {

	return (
		<div className="Homepage">
			<CitiesSearch />
			<ResultsTable/>
			<ResultsGraph/>
		</div>
	);
}

export default Homepage;
