## Store

The Redux **Store** contains a `state` object. This is where the state of your
application, the underlying data that is used to build your UI, will be stored.

> The Redux store is the single source of truth when it comes to application state.

[source](https://www.freecodecamp.org/learn/front-end-libraries/redux/create-a-redux-store)

```js
const reducer = (state = 5) => {
  return state;
}
const store = Redux.createStore(reducer)
const currentState = store.getState();
```
