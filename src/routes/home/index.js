import { h } from 'preact';
import style from './style';
import Converter from '../../components/converter';

const Home = () => (
	<div class={style.home}>
		<h1>Roman Numeral Converter</h1>
		<p>Gimme a number, and I'll convert it to a Roman numeral.</p>
		<Converter />
	</div>
);

export default Home;
