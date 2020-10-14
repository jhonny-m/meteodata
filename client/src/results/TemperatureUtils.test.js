import {addCelciusSymbol,convertKelvinToCelcius, formatterTemperatures} from './TemperatureUtils';


test('addCelciusSymbol should add ℃ to input',()=>{
	const zeroWithSymbol = addCelciusSymbol(0);
	const textWithSymbol = addCelciusSymbol('temp');
	expect(zeroWithSymbol).toStrictEqual('0 ℃');
	expect(textWithSymbol).toStrictEqual('temp ℃');
});
test('convertKelvinToCelcius should properly convert Kelvin to Celcius rounded',()=>{
	const zeroDegrees = convertKelvinToCelcius( 273.15);
	const absoluteZero = convertKelvinToCelcius(0);
	expect(zeroDegrees).toStrictEqual(0);
	expect(absoluteZero).toStrictEqual(-273);
});
test('formatterTemperatures should map temperatures of array from Kelvin to Celcius',()=>{
	const initialData = [
		{temperature: 273.15 },
		{temperature: 0 },
	];
	const expectedData=[
		{temperature: 0 },
		{temperature: -273 },
	];
	expect(formatterTemperatures(initialData)).toStrictEqual(expectedData);
});