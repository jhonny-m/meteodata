import React from 'react';
import PropTypes from 'prop-types';
import cityListStyles from './CityList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMinusCircle } from '@fortawesome/free-solid-svg-icons';

function CityList({cities, handleCityItemRemove}){
	function isLast(index){
		return index===(cities.length-1);
	}
	return(
		<ul className={cityListStyles.list}>
			{cities.map((city, index)=>(
				<li key={city}>
					<div className={cityListStyles.listItem} key={city}>
						<p className={cityListStyles.listText}>{city}</p> 
						<button type="button" 
							className={cityListStyles.removeButton}
							onClick={()=>handleCityItemRemove(city)}>
							<FontAwesomeIcon icon={faMinusCircle} />
						</button>
					</div>
					{!isLast(index) && <hr className={cityListStyles.separator}/>}
				</li>)
			)}
		</ul>   
	);
}
CityList.propTypes = {
	cities:PropTypes.array.isRequired,
	handleCityItemRemove: PropTypes.func.isRequired
};
export default CityList;