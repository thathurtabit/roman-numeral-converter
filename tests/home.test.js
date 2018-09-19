import Home from '../src/routes/home';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

describe('Initial Test of Home', () => {
	test('Home has the correct text', () => {
		const context = shallow(<Home />);
		expect(context.find('h1').text()).toBe('Number to Roman Numeral Converter');
		expect(context.find('p').text()).toBe('(Gimme a number*, and I\'ll convert it to a Roman numeral.)');
	});
});
