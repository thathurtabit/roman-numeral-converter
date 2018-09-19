import { Component } from 'preact';
import style from './style';
import linkState from 'linkstate';
import { converter } from './converter';

class Converter extends Component {

  state = {
    value: Math.floor(Math.random() * 3999) + 1
  };

  render(props, { value, converted }) {
    return (
      <section class={style.converter}>
        <section class={style.inputResult}>
          <input onInput={linkState(this, 'value')} maxlength="4" value={value} /> <span>=</span> <p class={style.output}>{converter(value)}</p>
        </section>
      </section>
    );
  }
}

export default Converter;
