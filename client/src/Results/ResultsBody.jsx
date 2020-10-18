import React from 'react';
import PropTypes from 'prop-types';
import resultsBodyStyles from './ResultsBody.module.css';
import ResultsTable from '../Results/Table/ResultsTable';
import ResultsGraph from '../Results/Graph/ResultsGraph';
import {formatterTemperatures} from './TemperatureUtils';

function ResultsBody({results}){
	return (
		<div className={resultsBodyStyles.container}>
			<ResultsGraph results={formatterTemperatures(results)}/>
			<div className={resultsBodyStyles.tableContainer}>
				<ResultsTable results={formatterTemperatures(results)}/>
			</div>
		</div>
	);

}
ResultsBody.propTypes={
	results:PropTypes.array.isRequired,
};

export default ResultsBody;