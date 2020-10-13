import React from 'react';
import PropTypes from 'prop-types';
import CityInputFormStyles from './CityInputForm.module.css';
import useSearchForm from './Utils/UseSearchForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';



function CityInputForm({handleCityInputFormSubmit}) {
	const initialValues = { cityInput: '' };
	const { values,  handleChange , handleSubmit} = useSearchForm({ initialValues, onSubmit: handleCityInputFormSubmit});
	const isSubmitDisabled = values.cityInput ==='';
	const submitButtonClassName = `${CityInputFormStyles.addButton} ${isSubmitDisabled && CityInputFormStyles.addButtonDisabled}`;
	return (
		<form onSubmit={handleSubmit} className={CityInputFormStyles.form} >
			<label htmlFor="cityInput" className={CityInputFormStyles.label}>
				<FontAwesomeIcon icon={faMapMarkerAlt} />
			</label>
			<input
				type="text"
				name="cityInput"
				value={values.cityInput}
				onChange={handleChange}
				placeholder="Type a city name"
				className={CityInputFormStyles.input}
			/>
			<button type="submit" disabled={isSubmitDisabled} 
				className={submitButtonClassName}>
				<FontAwesomeIcon icon={faPlusCircle} />
			</button>
		</form>
	);
}
CityInputForm.propTypes = {
	handleCityInputFormSubmit:PropTypes.func.isRequired,
};

export default CityInputForm;