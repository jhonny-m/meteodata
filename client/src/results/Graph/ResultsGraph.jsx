import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar,  XAxis, YAxis ,Legend,Tooltip} from 'recharts';


function graphWidthCalculator(currentWidth, windowWidth){
	const maxWidth = 600;
	const availableWidth = windowWidth-32;
	if(currentWidth >= availableWidth ){
		return availableWidth > maxWidth? maxWidth: availableWidth;
	}
	return currentWidth;

}

function ResultsGraph({results}) {
	function formatterLegend (){
		const celciusSymbol = '℃';
		return `Temperature ${celciusSymbol}`;
	}
	const [width,setWidth]= useState(graphWidthCalculator(window.innerWidth, window.innerWidth)); 
	useEffect(()=>{
		function handleResize(){
			setWidth(graphWidthCalculator(width, window.innerWidth));
		}
		window.addEventListener('resize',handleResize);
		return ()=>window.removeEventListener('resize', handleResize);
		
	},[]);
	function convertKelvinToCelcius(temp){
		return Math.round(temp-273.15);
	}
	function formaterTemperatures(data){
		return data.map(citiData=> ({
			...citiData,
			temperature:convertKelvinToCelcius(citiData.temperature)
		}));
	}

	return (
		<BarChart  width={width} height={300} data={formaterTemperatures(results)}>
			<XAxis dataKey="cityName" />
			<YAxis />
			<Tooltip />
			<Legend formatter={formatterLegend} />
			<Bar dataKey="temperature" barSize={30} fill="#8884d8"/>		
		</BarChart >
	);
}
ResultsGraph.propTypes={
	results:PropTypes.array.isRequired,
};

export default ResultsGraph;


