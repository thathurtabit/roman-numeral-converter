import { h, render, Component } from 'preact';
import style from './style';
import linkState from 'linkstate';

class Converter extends Component {

  state = {
    value: Math.floor(Math.random() * 3999) + 1
  };

  render(props, state) {
    return (
      <section class={style.converter}>
        <section class={style.inputResult}>
          <input onInput={linkState(this, 'value')} maxlength="4" value={state.value} /> <span>=</span> <p class={style.output}>{state.value}</p>
        </section>
        <small>*<span>Max number: 3999</span> - never mind why!</small>
      </section>
    );
  }
}

export default Converter;
