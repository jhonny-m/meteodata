import React from 'react';
import PropTypes from 'prop-types';
import resultsBodyStyles from './ResultsBody.module.css';
import ResultsTable from '../Results/Table/ResultsTable';
import ResultsGraph from '../Results/Graph/ResultsGraph';

function ResultsBody({results}){
	return (
		<div className={resultsBodyStyles.container}>
			<ResultsGraph results={results}/>
			<ResultsTable results={results}/>
		</div>
	);

}
ResultsBody.propTypes={
	results:PropTypes.array.isRequired,
};

export default ResultsBody;