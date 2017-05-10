import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from "../constants";

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  };
}
