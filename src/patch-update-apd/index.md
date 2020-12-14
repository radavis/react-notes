# Patch update APDs... How does it work?

## Frontend

A form field `onChange` event handler calls the appropriate action creator with
value of the field.

```js
setMedicaidDirectorName('Cornelius Fudge')
```

[source](https://github.com/CMSgov/eAPD/blob/88454d647ac5ece05a6d01ceba17ad3c4b85ede3/web/src/containers/ApdStateProfileMedicaidOffice.js#L52)

---

The action creator defines the `path` within the APD data structure, stored in
redux state, where this data resides. The action creator returns a redux action
with the `type` set to `EDIT_APD`.

```js
{
  type: EDIT_APD,
  path: '/stateProfile/medicaidDirector/name',
  value: 'Cornelius Fudge'
}
```

[source](https://github.com/CMSgov/eAPD/blob/88454d647ac5ece05a6d01ceba17ad3c4b85ede3/web/src/actions/editApd/stateProfile.js#L13-L21)

---

The `apd` reducer updates `state.apd.data` with this information. `applyPatch`
from `jsonpatch` is used to update this slice of the APD.

```js
case EDIT_APD: {
  return {
    ...state,
    data: applyPatch(state.data, [
      {
        op: 'replace',
        path: action.path,
        value: action.value
      }
    ])
  };
}
```

---

The `patch` reducer adds an item to the `state.patch` array.

[source](https://github.com/CMSgov/eAPD/blob/88454d647ac5ece05a6d01ceba17ad3c4b85ede3/web/src/reducers/patch.js#L63-L92)

---

The `saveMiddleware`, upon seeing an `EDIT_APD` action type, waits 300ms, and
then dispatches a call to `saveAPD()`.

[source](https://github.com/CMSgov/eAPD/blob/88454d647ac5ece05a6d01ceba17ad3c4b85ede3/web/src/saveMiddleware.js#L39)

---

`saveAPD()` 'announces' that it is performing a request to save the APD to the backend:

```js
dispatch({ type: SAVE_APD_REQUEST });
```

Then, it performs an HTTP patch request, along with the data stored within `state.patch`.

[source](https://github.com/CMSgov/eAPD/blob/88454d647ac5ece05a6d01ceba17ad3c4b85ede3/web/src/actions/app/apd.js#L35)

Then, it then announces the result of the request:

```js
dispatch({ type: SAVE_APD_SUCCESS, data: res.data });
```


## Backend

todo...
