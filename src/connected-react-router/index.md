# `connected-react-router`

> Synchronize router state with redux store through uni-directional flow (i.e. history -> store -> router -> components).

[source](https://github.com/supasate/connected-react-router)

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from './App';

const Root = ({ history, store }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
};

Root.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Root;
```
