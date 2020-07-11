## Reducer

`reducer(state, action) => newState`

A reducer's job is to accept current state and an action, and to return updated state.

```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Do not modify state directly. Always return a modified copy.
  if (action.type === 'LOGIN') return { ...state, login: true };
  return state;
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// store.dispatch(loginAction())
```
