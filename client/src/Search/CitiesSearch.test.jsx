import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen,waitFor,waitForElementToBeRemoved } from '@testing-library/react';
import CitiesSearch from './CitiesSearch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {mockedResults} from '../Results/TestUtils';

const server = setupServer(
	rest.get('http://localhost:3001/search', (req, res, ctx) => {
		return res(ctx.json(mockedResults));
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('CitiesSearch valid request ', async ()=>{
	const handleSearchResponse = jest.fn();
	render(<CitiesSearch handleSearchResponse={handleSearchResponse}/>);
	expect(screen.queryByText('Search')).toBeFalsy();  
	const input = screen.getByPlaceholderText('Type a city name');
	const button = screen.getByRole('button');
	fireEvent.change(input,{target: {value:'Porto'}} );
	fireEvent.click(button);
	expect(screen.queryByText('Search')).toBeTruthy();  
	expect(screen.queryByText('Search')).toBeDisabled();  
	fireEvent.change(input,{target: {value:'Braga'}} );
	fireEvent.click(button);
	fireEvent.change(input,{target: {value:'Aveiro'}} );
	fireEvent.click(button);
	expect(screen.queryByText('Search')).toBeEnabled();  
	const searchButton = screen.queryByText('Search');
	fireEvent.click(searchButton);
	expect(screen.queryByTestId('loading')).toBeTruthy();
	await waitForElementToBeRemoved(()=>screen.queryByTestId('loading'));
	expect(screen.queryByTestId('loading')).toBeFalsy();
	expect(handleSearchResponse).toHaveBeenCalledWith(mockedResults);
});

test('CitiesSearch fail request ', async ()=>{
	server.use(
		rest.get('http://localhost:3001/search', (req, res, ctx) => {
			return res(ctx.status(500));
		}));
	const handleSearchResponse = jest.fn();
	render(<CitiesSearch handleSearchResponse={handleSearchResponse}/>);
	expect(screen.queryByText('Search')).toBeFalsy();  
	const input = screen.getByPlaceholderText('Type a city name');
	const button = screen.getByRole('button');
	fireEvent.change(input,{target: {value:'Porto'}} );
	fireEvent.click(button);
	expect(screen.queryByText('Search')).toBeTruthy();  
	expect(screen.queryByText('Search')).toBeDisabled();  
	fireEvent.change(input,{target: {value:'Braga'}} );
	fireEvent.click(button);
	fireEvent.change(input,{target: {value:'Aveiro'}} );
	fireEvent.click(button);
	expect(screen.queryByText('Search')).toBeEnabled();  
	const searchButton = screen.queryByText('Search');
	fireEvent.click(searchButton);
	expect(screen.queryByTestId('loading')).toBeTruthy();
	await waitForElementToBeRemoved(()=>screen.queryByTestId('loading'));
	expect(screen.queryByTestId('loading')).toBeFalsy();
	expect(screen.queryAllByText('Search Failed! invalid city name')).toBeTruthy();
});
