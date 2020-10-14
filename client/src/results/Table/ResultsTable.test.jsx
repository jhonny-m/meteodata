import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ResultsTable ,{ compare, orderBy} from './ResultsTable';
import { fireEvent, render, screen, within } from '@testing-library/react';
import {mockedResults} from '../TestUtils';
import {addCelciusSymbol} from '../TemperatureUtils';
import {timeParser} from '../TimeUtils';

test('compare should return 0 for ===, 1 for > and -1 for <', ()=>{
	const value1 = 1;
	const value2 = 2;
	expect(compare(value1,value1)).toStrictEqual(0);
	expect(compare(value1,value2)).toStrictEqual(-1);
	expect(compare(value2,value1)).toStrictEqual(1);
});


test('orderBy should order array of objects by key and order', ()=>{
	const array = [
		{value:6},
		{value:4},
		{value:5},
		{value:3},
		{value:1},
		{value:2},
	];
	const orderAsc = [
		{value:1},
		{value:2},
		{value:3},
		{value:4},
		{value:5},
		{value:6},
	];
	const orderDesc = [
		{value:6},
		{value:5},
		{value:4},
		{value:3},
		{value:2},
		{value:1},
	];
	expect(orderBy(array,'value','asc')).toStrictEqual(orderAsc);
	expect(orderBy(array,'value','desc')).toStrictEqual(orderDesc);

});

test('ResultsTable' ,()=>{
	render(<ResultsTable results={mockedResults}/>);
	mockedResults.map(({cityName, temperature, sunsetDate,sunriseDate})=>{
		const row = screen.getByText(cityName).closest('tr');
		const utils = within(row);
		expect(utils.getByText(cityName)).toBeInTheDocument();
		expect(utils.getByText(addCelciusSymbol(temperature))).toBeInTheDocument();
		expect(utils.getByText(timeParser(sunsetDate))).toBeInTheDocument();
		expect(utils.getByText(timeParser(sunriseDate))).toBeInTheDocument();
	});
});