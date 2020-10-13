const baseUrl = 'http://localhost:3001/search?';

function citiesToQuery(cities){
	return cities.reduce((acc, city,index)=>{
		const queryConnector = index<cities.length-1?'&':'';
		return `${acc}cities=${city}${queryConnector}`;
	},'');
}
export function citiesSearchUrlBuilder(cities){
	return `${baseUrl}${citiesToQuery(cities)}`;
}

export function handleGetRequest(url, callback){
	fetch(url).then((response)=> {
		return response.json();
	}).then(data=>{
		callback(data);
	});
}