# App

App class are created via `createApp` function. Once instantiated they expose these methods below.

## Methods

### getOption(optionName)

Returns a specific option that was passed to it during construction.

### createStore(rootReducer, initialState = {})

Used internally.

@TODO: should this be removed from public API?

### getStore(appName)

Returns the Store of an App by its name.

@TODO: could this be removed from public API?

### getRootApp()

Returns the Root app if exists.

### getModel(name)

Returns the instance of Model. First looks for its existence in the current app, then parent app.

### getService(name)

Returns the instance of Service. First looks for its existence in the current app, then parent app.

### getFactory(name)

Returns a fresh new instance for the given Factory name. First looks for its existence in the current app, then parent app.

### registerWidget(widgetApp, regionName)

For registering child apps (widgets), to parent app.

```js
parentApp.registerWidget(childApp, 'sidebar');
```

### beforeMount()

Called before mounting the app.

### getL10ns()

Returns the `L10ns` instance from the root app.

### render()

Returns a Component ready to be embedded into another Component, or render to DOM directly.

### afterMount()

Called after mounting the app.

### beforeUnmount()

Called right before unmounting the app.

### setRegion(regionName)

To be called from the child-app, for setting its region in the parent app.

```js
childApp.setRegion('sidebar');
```

### getWidgets(regionName)

Returns a list of child apps, by a specific region. Returns all the child apps, irrespective of their region, if no `regionName` is provided.

### getValidationFunctions()

Returns a list of validation functions, passed via options to the app, to be used with the Validation service.

This method attempts to obtain the list from the RootApp's options. If not available will try to obtain it from the options of the app calling it. Returns undefined in case everything fails.

### observeWidgets()

Returns an observable, that you can subscribe to. Emit's a `next` event every time there is a change in the list of registered widgets.

### readStateFrom(appNames)

Set child app's access to other apps by their names as an array.

```js
childApp.readStateFrom([
  'myOtherApp',
  'anotherApp'
]);
```
