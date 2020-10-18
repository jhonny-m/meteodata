export function normalizeDate(date) {
	const millisecondsInSecond = 1000;
	return new Date(date * millisecondsInSecond);
}

export function doubleDigitTimeUnit(unit){
	return unit<10? `0${unit}`:`${unit}`;
}

export function timeParser(date){
	const normalizedDate = normalizeDate(date);
	return `${doubleDigitTimeUnit(normalizedDate.getHours())}:${doubleDigitTimeUnit(normalizedDate.getMinutes())}`;
}