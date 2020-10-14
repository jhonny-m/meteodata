import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ResultsBody from './ResultsBody';
import {mockedResults} from './TestUtils';


test('ResultsBody',()=>{
	const container = ResultsBody({results:mockedResults});
	expect(container).toMatchSnapshot();
});