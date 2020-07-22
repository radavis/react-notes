## Actions

Actions are emitted in response to events that occur within your application.

> Think of Redux actions as messengers that deliver information about events
> happening in your app to the Redux store. The store then conducts the business
> of updating state based on the action that occurred.

[source](https://www.freecodecamp.org/learn/front-end-libraries/redux/define-a-redux-action)

Actions are typically described as having a `type` property, and a `payload` of
information.

```js
const action = {
  type: "ACTION_NAME",
  payload
}
```

Define action creator functions to build action objects.

```js
const login = () => ({
  type: "LOGIN"
})

const addMessage = (title, content) => ({
  type: "ADD_MESSAGE",
  title,
  content
})
```
