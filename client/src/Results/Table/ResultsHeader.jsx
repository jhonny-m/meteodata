import React, { useState } from 'react';
import PropTypes from 'prop-types';
import resultsTableStyles from './ResultsTable.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

function ColumnHeader({title, onOrderClick, objectKey}){
	const [order, setOrder]= useState('asc');
	function toggleOrder(){
		setOrder(order==='asc'? 'desc': 'asc');
	}
	function onClick(){
		onOrderClick(objectKey, order);
		toggleOrder();
	}
	const tableHeaderClassName=`${resultsTableStyles.tableCell} ${resultsTableStyles.tableHeader}`;

	return( <th className={tableHeaderClassName}>
		<span className={resultsTableStyles.tableHeaderText}>{title}</span> 
		<button type="button"
			className={resultsTableStyles.sortButton}
			onClick={onClick}>
			<FontAwesomeIcon icon={faSort} />
		</button> 
	</th>);  
}
ColumnHeader.propTypes={
	title:PropTypes.string.isRequired,
	onOrderClick:PropTypes.func.isRequired,
	objectKey:PropTypes.string.isRequired,
};

function ResultsHeader({onOrderClick}) {
	return (
		<tr>
			<ColumnHeader title="Name" onOrderClick={onOrderClick} objectKey={'cityName'}/>
			<ColumnHeader title="Temperature" onOrderClick={onOrderClick}  objectKey={'temperature'}/>
			<ColumnHeader title="Sunrise" onOrderClick={onOrderClick}  objectKey={'sunriseDate'}/>
			<ColumnHeader title="Sunset" onOrderClick={onOrderClick}  objectKey={'sunsetDate'}/>
		</tr>
	);
}

ResultsHeader.propTypes={
	onOrderClick:PropTypes.func.isRequired,
};

export default ResultsHeader;