const baseUrl = 'http://localhost:3001/search?';

export function citiesToQuery(cities){
	return cities.reduce((acc, city,index)=>{
		const queryConnector = index<cities.length-1?'&':'';
		return `${acc}cities=${city}${queryConnector}`;
	},'');
}
export function citiesSearchUrlBuilder(cities){
	return `${baseUrl}${citiesToQuery(cities)}`;
}

export function handleGetRequest(url, callback,handleError){
	fetch(url).then((response)=> {
		if(response.ok)		
			return response.json();
		throw new Error('request failed');
	})
		.then(data=>{
			callback(data);
		})
		.catch(handleError);
}