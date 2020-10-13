import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar,  XAxis, YAxis ,Legend,Tooltip} from 'recharts';


function ResultsGraph({results}) {
	function formater (){
		return 'Temperature';
	}
	return (
		<BarChart  width={600} height={300} data={results}>
			<XAxis dataKey="cityName" />
			<YAxis />
			<Tooltip />
			<Legend formatter={formater} />
			<Bar dataKey="temperature" barSize={30} fill="#8884d8"/>		
		</BarChart >
	);
}
ResultsGraph.propTypes={
	results:PropTypes.array.isRequired,
};

export default ResultsGraph;


