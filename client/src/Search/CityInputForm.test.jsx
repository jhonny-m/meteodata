import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {mockedResults} from '../Results/TestUtils';
import CityInputForm from './CityInputForm';



// const server = setupServer(
// 	rest.get('/search', (req, res, ctx) => {
// 		return res(ctx.json(mockedResults));
// 	})
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

test('CityInputForm',()=>{
	const handleCityInputFormSubmit = jest.fn();
	const { debug } = render(<CityInputForm handleCityInputFormSubmit={handleCityInputFormSubmit}/>);
	const input = screen.getByPlaceholderText('Type a city name');
	const button = screen.getByRole('button');
	fireEvent.change(input,{target: {value:'Porto'}} );
	expect(input.value).toBe('Porto');
	fireEvent.click(button);
	expect(handleCityInputFormSubmit).toHaveBeenCalledTimes(1);
	expect(handleCityInputFormSubmit).toHaveBeenCalledWith({cityInput: 'Porto'});
});