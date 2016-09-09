# Googled

[Live][heroku]: googled.space

[heroku]: googled.space

Googled is a full-stack web application inspired by Google's Cultural Institute.  It uses Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

[image of splash page](splash.tiff)

## Features & Implementation

### Image search

  Search requests are made through the Bing Image Search API (cheaper) and image objects with `title`, `thumbUrl` (source url for the image's thumbnail), and `url` (source url for the image) are constructed in the frontend store. Just the thumbnails are loaded in the search results.

  [image of image search](search.tiff)

### Image render

  Upon navigation to an image, the store records the image in the frontend store as the currentImage and the full image is loaded. Magnificent.js was used to implement pan and zoom.

  If logged in, a favorite icon is visible in the header that allows the user to favorite or unfavorite an image. If the image was from a search result, favoriting the image commits the image to the database as well. The favorite icon displays the current favorite status of the image by the current user.

  [image of image render](image.tiff)

### Favorites

  Images and users are stored in different tables in the database, and a favorites join table connects images with users. Upon navigation to the favorites page, an API call is made to request a user's favorites.

  [image of favorites](favorites.tiff)
  [image of new_collection](new_collection.tiff)

### Collections

  Favorited images can be collected into collections. Images and collections are stored in different tables in the database, and a collected_images join table connects images with collections. A collection has a `title`, `description`, and `user_id`.

  Upon navigation to the user's favorites page, an API call is made to request the user's collections. Upon navigation to a collection's page, an API call is made to request the collection's images. In collection indices, the API call requests one image at random from each collection's images.

  Collections can be created, read, updated, and destroyed. Creation and update forms do not redirect to new routes or components, but are revealed and hidden using CSS selectors and jQuery.
  A set of search results can be instantly created into a user's collection.

  [image of collections](collection.tiff)

### User authentication

  Users can sign up, login, and logout. Passwords are encrypted with BCrypt. Backend authentication uses session token. A logged in user is communicated to the frontend by bootstrapping the user to the window, then preloading the frontend store with the user or null.

  [image of auth](auth.tiff)
