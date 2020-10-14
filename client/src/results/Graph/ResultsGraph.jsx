import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar,  XAxis, YAxis ,Legend,Tooltip} from 'recharts';
import {addCelciusSymbol} from '../TemperatureUtils';



function ResultsGraph({results}) {
	function graphWidthCalculator(currentWidth, windowWidth){
		const maxWidth = 600;
		const availableWidth = windowWidth-32;
		if(currentWidth >= availableWidth ){
			return availableWidth > maxWidth? maxWidth: availableWidth;
		}
		return currentWidth;
	
	}
	const [width,setWidth]= useState(graphWidthCalculator(window.innerWidth, window.innerWidth)); 
	useEffect(()=>{
		function handleResize(){
			setWidth(graphWidthCalculator(width, window.innerWidth));
		}
		window.addEventListener('resize',handleResize);
		return ()=>window.removeEventListener('resize', handleResize);
		
	},[]);
	function formatterLegend(){
		return addCelciusSymbol('Temperature');
	}
	return (
		<BarChart  width={width} height={300} data={results}>
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


