## `react-redux`

Using redux within a react app.

### `<Provider />`

Allow your Component tree access to the application `store`.

```jsx
// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
```

### `connect()`

Connect your component to the store.

```jsx
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

// const Counter = ...

// mapReduxStateToComponentProps
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
```

### Pub/Sub Analogy

* Publish actions (via `store.dispatch`)
* Reducers subscribe to actions, and perform work in response.

**Remember**: One action can trigger many reducers!

### Resources

* [Redux Style Guide](https://redux.js.org/style-guide/style-guide)
