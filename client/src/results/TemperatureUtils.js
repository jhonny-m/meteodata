
export function addCelciusSymbol (value){
	const celciusSymbol = '℃';
	return `${value} ${celciusSymbol}`;
}

export function convertKelvinToCelcius(temp){
	return Math.round(temp-273.15);
}
export function formatterTemperatures(data){
	return data.map(citiData=> ({
		...citiData,
		temperature:convertKelvinToCelcius(citiData.temperature)
	}));
}
