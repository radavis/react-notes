import React, { createContext } from "react";

const ContextExample = () => {
  const { Provider, Consumer } = createContext("default value");

  return (
    <>
      <div>
        {/* default value is rendered when <Provider /> is not present */}
        <Consumer>{value => <span>{value}</span>}</Consumer>
      </div>
      <div>
        <Provider value="overridden value">
          <Consumer>{value => <span>{value}</span>}</Consumer>
        </Provider>
      </div>
    </>
  )
};

export default ContextExample;
