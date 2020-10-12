import React, { useState } from 'react';
import { BarChart, Bar,  XAxis, YAxis ,Legend} from 'recharts';
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
		temperature: 29.82
	}
];


function ResultsGraph() {
	function formater (value, entry, index){
		console.log('here');
		console.log(value, entry, index);
		return 'Temperature';
	}
	return (
		<BarChart  width={600} height={300} data={results}>
			<Bar dataKey="temperature" barSize={30} fill="#8884d8"/>
			<XAxis dataKey="cityName" />
			<YAxis />
			<Legend formatter={formater} />
		</BarChart >
	);
}


export default ResultsGraph;


