import { useEffect, useState, useRef } from 'react';

const useSearchForm = ({ initialValues, onSubmit }) => {
	const [values, setValues] = useState(initialValues || {});
	const formRendered = useRef(true);
	useEffect(() => {
		if (formRendered.current) {
			setValues(initialValues);
		}
		formRendered.current = false;
	}, [initialValues]);

	const handleChange = (event) => {
		event.persist();
		const { target } = event;
		const { name, value } = target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		onSubmit( values );
		formRendered.current=true;
	};

	return {
		values,
		handleChange,
		handleSubmit,
	};
};

export default useSearchForm;
