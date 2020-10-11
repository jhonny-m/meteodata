import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import useSearchForm from './UseSearchForm';




function CityInputForm({handleCityInputFormSubmit}) {
	const initialValues = { cityInput: '' };
	const { values,  handleChange , handleSubmit} = useSearchForm({ initialValues, onSubmit: handleCityInputFormSubmit});
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="cityInput">
                Search for a city
			</label>
			<input
				type="text"
				name="cityInput"
				value={values.cityInput}
				onChange={handleChange}
			/>
			<button type="submit">add</button>
		</form>
	);
}
CityInputForm.propTypes = {
	handleCityInputFormSubmit:PropTypes.func.isRequired,
};

export default CityInputForm;