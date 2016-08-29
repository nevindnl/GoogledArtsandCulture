# Redux Structure

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `onEnter`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Image Cycles

### Images API Request Actions

* `fetchAllImages`
  0. invoked from `ImagesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/images` is called.
  0. `receiveAllImages` is set as the success callback.

* `fetchSingleImage`
  0. invoked from `ImageDetail` `didMount`/`willReceiveProps`
  0. `GET /api/images/:id` is called.
  0. `receiveSingleImage` is set as the success callback.

### Images API Response Actions

* `receiveAllImages`
  0. invoked from an API callback
  0. the `ImageReducer` updates `images` in the application's state.

* `receiveSingleImage`
  0. invoked from an API callback
  0. the `ImageReducer` updates `images[id]` in the application's state.

## Collection Cycles

### Collections API Request Actions

* `fetchAllCollections`
  0. invoked from `CollectionsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/Collections` is called.
  0. `receiveAllCollections` is set as the success callback.

* `createCollection`
  0. invoked from new Collection button `onClick`
  0. `POST /api/Collections` is called.
  0. `receiveSingleCollection` is set as the callback.

* `fetchSingleCollection`
  0. invoked from `CollectionDetail` `didMount`/`willReceiveProps`
  0. `GET /api/Collections/:id` is called.
  0. `receiveSingleCollection` is set as the success callback.

* `updateCollection`
  0. invoked from `CollectionForm` `onSubmit`
  0. `POST /api/Collections` is called.
  0. `receiveSingleCollection` is set as the success callback.

* `destroyCollection`
  0. invoked from delete Collection button `onClick`
  0. `DELETE /api/Collections/:id` is called.
  0. `removeCollection` is set as the success callback.

### Collections API Response Actions

* `receiveAllCollections`
  0. invoked from an API callback.
  0. The `Collection` reducer updates `Collections` in the application's state.

* `receiveSingleCollection`
  0. invoked from an API callback.
  0. The `Collection` reducer updates `Collections[id]` in the application's state.

* `removeCollection`
  0. invoked from an API callback.
  0. The `Collection` reducer removes `Collections[id]` from the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `Search` `onChange` when there is text
  0. `GET /api/images` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `Search` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.

## Favorite Cycles

* `fetchAllFavorites`
  0. invoked from `Favorites` `didMount`/`willReceiveProps`
  0. `GET /api/favorites` is called.
  0. `receiveAllFavorites` is set as the success callback.

* `receiveAllFavorites`
  0. invoked from an API callback
  0. the `ImageReducer` updates `images` in the application's state.
