import {citiesToQuery} from './SearchRequestUtils';


test('citiesToQuery',()=>{
	const cities = ['London', 'Paris', 'Manchester'];
	const query= citiesToQuery(cities);
	expect(query).toStrictEqual('cities=London&cities=Paris&cities=Manchester');
});

