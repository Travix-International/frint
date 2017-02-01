import { createComponent, mapToProps } from 'frint';

import {
  changeColor
} from '../actions/color';
import {
  GREEN_COLOR,
  RED_COLOR
} from '../constants';

const Root = createComponent({
  render() {
    const codeStyle = {
      color: this.props.color,
      backgroundColor: this.props.color
    };

    return (
      <div>
        <h5>Widget: Color</h5>

        <p>Color value in <strong>WidgetColor</strong>: <code style={codeStyle}>{this.props.color}</code></p>

        <div>
          <button
            className="button"
            style={{backgroundColor: GREEN_COLOR, color: '#fff'}}
            onClick={() => this.props.changeColor(GREEN_COLOR)}
          >
            Green
          </button>

          <button
            className="button"
            style={{backgroundColor: RED_COLOR, color: '#fff'}}
            onClick={() => this.props.changeColor(RED_COLOR)}
          >
            Red
          </button>
        </div>

        <p>Counter value from <strong>WidgetCounter</strong>: <code>{this.props.counter}</code></p>
      </div>
    );
  }
});

export default mapToProps({
  dispatch: {
    changeColor,
  },
  state(state) {
    return {
      color: state.color.value
    };
  },
  shared(sharedState) {
    return {
      counter: (typeof sharedState.WidgetCounter !== 'undefined')
        ? sharedState.WidgetCounter.counter.value
        : 'n/a'
    };
  }
})(Root);
