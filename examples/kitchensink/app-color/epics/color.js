import {
  CHANGE_COLOR_ASYNC
} from '../constants';
import { changeColor } from '../actions/color';

export default function colorEpic$(action$) {
  return action$
  .filter(action => action.type === CHANGE_COLOR_ASYNC)
  .delay(1000)
  .map(action => changeColor(action.color));
}
