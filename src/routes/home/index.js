import { h } from 'preact';
import WebFont from 'webfontloader';
import style from './style';
import Converter from '../../components/converter';

WebFont.load({
	google: {
		families: ['Roboto Condensed', 'Roboto']
	}
});

const Home = () => (
	<div class={style.home}>
		<h1>Number to <span>Roman Numeral</span> Converter</h1>
		<p>(Gimme a number<sup>*</sup>, and I'll convert it to a Roman numeral.)</p>
		<Converter />
		<small>*<span>Max: 3999</span> - never mind why!</small>
	</div>
);

export default Home;
