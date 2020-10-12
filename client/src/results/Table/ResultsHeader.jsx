import React, { useState } from 'react';
import '../../App.css';

function ColumnHeader({title, onOrderClick, objectKey}){
	const [order, setOrder]= useState('asc');
	function toggleOrder(){
		setOrder(order==='asc'? 'desc': 'asc');
	}
	function onClick(){
		onOrderClick(objectKey, order);
		toggleOrder();
	}

	return( <th>{title} <button type="button" onClick={onClick}>order</button> </th>);  
}

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

export default ResultsHeader;