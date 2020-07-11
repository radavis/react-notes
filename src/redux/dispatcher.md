## Dispatcher

Tell the Redux Store that an action occured.

```js
const initialState = { login: false }
const reducer = (state = initialState) => state
const store = Redux.createStore(reducer);
const login = () => ({
  type: 'LOGIN'
})

store.dispatch(login())
```
