
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, logRoles, render, screen, within } from '@testing-library/react';
import ResultsHeader  from './ResultsHeader';


test('ResultsHeader',()=>{
	const onOrderClick= jest.fn();
	render(<table><thead><ResultsHeader onOrderClick={onOrderClick}/></thead></table>);
	const orderButtons = screen.queryAllByRole('button');
	expect(orderButtons.length).toStrictEqual(4);
	fireEvent.click(orderButtons[0]);
	expect(onOrderClick).toHaveBeenLastCalledWith('cityName', 'asc');
	fireEvent.click(orderButtons[1]);
	expect(onOrderClick).toHaveBeenLastCalledWith('temperature', 'asc');
	fireEvent.click(orderButtons[2]);
	expect(onOrderClick).toHaveBeenLastCalledWith('sunriseDate', 'asc');
	fireEvent.click(orderButtons[3]);
	expect(onOrderClick).toHaveBeenLastCalledWith('sunsetDate', 'asc');
	fireEvent.click(orderButtons[0]);
	expect(onOrderClick).toHaveBeenLastCalledWith('cityName', 'desc');
	fireEvent.click(orderButtons[1]);
	expect(onOrderClick).toHaveBeenLastCalledWith('temperature', 'desc');
	fireEvent.click(orderButtons[2]);
	expect(onOrderClick).toHaveBeenLastCalledWith('sunriseDate', 'desc');
	fireEvent.click(orderButtons[3]);
	expect(onOrderClick).toHaveBeenLastCalledWith('sunsetDate', 'desc');
	
});