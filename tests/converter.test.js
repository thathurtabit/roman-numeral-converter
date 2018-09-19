import { converter } from '../src/components/converter/converter';

describe('Initial testing of converter function', () => {
	test('Expect text to return \'numbers only!\'', () => {
		expect(converter('hello')).toBe('Numbers only please!');
	});
	test('Expect numbers over 3999 to return error', () => {
		expect(converter(4000)).toBe('Only numbers up to 3999 please!');
	});
	test('Expect number to return number', () => {
		expect(converter(50)).toBe(50);
	});
});