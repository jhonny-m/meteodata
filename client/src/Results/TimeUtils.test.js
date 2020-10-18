import {normalizeDate, doubleDigitTimeUnit, timeParser} from './TimeUtils';


test('normalizeDate should return correct date',()=>{
	const epochDate = normalizeDate(0);
	const randomDate = normalizeDate(123);
	expect(epochDate).toStrictEqual(new Date(0));
	expect(randomDate).toStrictEqual(new Date(123000));
});

test('doubleDigitTimeUnit should return time unit with double digits',()=>{
	const zero = doubleDigitTimeUnit(0);
	const singleDigit = doubleDigitTimeUnit(1);
	const doubleDigit = doubleDigitTimeUnit(10);
	expect(zero).toStrictEqual('00');
	expect(singleDigit).toStrictEqual('01');
	expect(doubleDigit).toStrictEqual('10');
});

test('timeParser should return correct time in hh:mm',()=>{
	const epochDate = timeParser(new Date(0));
	const randomDate = timeParser(new Date(123000));
	expect(epochDate).toStrictEqual('01:00');
	expect(randomDate).toStrictEqual('11:10');
});