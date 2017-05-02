import React from 'react';
import { observe, Region } from 'frint-react';
import { Observable, BehaviorSubject } from 'rxjs';

import { addTodo } from '../actions/todos';
import Item from './Item';

const Root = React.createClass({
  render() {
    return (
      <div>
        <h5>App: Todos</h5>

        <label htmlFor="todoInput">
          Create a new Todo item
        </label>

        <input
          className="u-full-width"
          type="text"
          placeholder="my todo title..."
          id="todoInput"
          value={this.props.inputValue}
          onChange={(e) => this.props.changeInput(e.target.value)}
        />

        <button
          type="button"
          className="button-primary"
          onClick={() => this.props.addTodo(this.props.inputValue)}
        >
          Submit
        </button>

        <div>
        {this.props.todos.map((todo) => {
          return <Item todo={todo} />
        })}
        </div>
      </div>
    );
  }
});

export default observe(function (app) {
  const store = app.get('store');

  const state$ = store.getState$()
    .map((state) => {
      return {
        todos: state.todos.records,
      };
    });

  const formInput$ = (new BehaviorSubject(''))
    .map((inputValue) => {
      return {
        inputValue,
      };
    });
  const clearInput = () => formInput$.next('');
  const changeInput = (value) => formInput$.next(value);

  const actions$ = Observable.of({
    addTodo: (...args) => {
      clearInput();
      return store.dispatch(addTodo(...args));
    },

    changeInput,
    clearInput,
  });

  return state$
    .merge(actions$)
    .merge(formInput$)
    .scan((props, emitted) => {
      return {
        ...props,
        ...emitted,
      };
    }, {
      todos: [],
    });
})(Root);
