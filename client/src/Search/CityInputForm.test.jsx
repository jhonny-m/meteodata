import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import CityInputForm from './CityInputForm';



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