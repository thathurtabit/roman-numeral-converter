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
});
