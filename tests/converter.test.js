import { converter } from '../src/components/converter/converter';
import { response } from '../src/common/constants';
const { MAX_NUM, INPUT_EMPTY, INPUT_MIN_MAX_NUM, INPUT_STRING } = response;

describe('Initial testing of converter function', () => {
	test(`Expect text to return "${INPUT_STRING}"`, () => {
		expect(converter('hello')).toBe(INPUT_STRING);
	});
	test(`Expect numbers over 3999 to return "${INPUT_MIN_MAX_NUM}"`, () => {
		expect(converter(MAX_NUM + 1)).toBe(INPUT_MIN_MAX_NUM);
	});
	test(`Expect numbers less than 1 to return "${INPUT_MIN_MAX_NUM}"`, () => {
		expect(converter(-1)).toBe(INPUT_MIN_MAX_NUM);
	});
	test(`Expect empty input to return "${INPUT_EMPTY}"`, () => {
		expect(converter('')).toBe(INPUT_EMPTY);
	});
	test(`Expect 1234 to return "MCCXXXIV"`, () => {
		expect(converter(1234)).toBe('MCCXXXIV');
	});
	test(`Expect 1 to return "I"`, () => {
		expect(converter(1)).toBe('I');
	});
	test(`Expect 500 to return "D"`, () => {
		expect(converter(500)).toBe('D');
	});
	test(`Expect 999 to return "CMXCIX"`, () => {
		expect(converter(999)).toBe('CMXCIX');
	});
	test(`Expect 85 to return "LXXXV"`, () => {
		expect(converter(85)).toBe('LXXXV');
	});
});
