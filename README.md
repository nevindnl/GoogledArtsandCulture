# Googled

[Live][heroku]: googled.space

[heroku]: http://googled.space

Googled is a full-stack web application inspired by Google's Cultural Institute.  It uses a PostgreSQL database, Ruby on Rails on the backend, and React with a Redux architectural framework on the frontend.  

<img src="./screenshots/splash 1.png"></img>
<img src="./screenshots/splash 2.png"></img>
<img src="./screenshots/splash 3.png"></img>
<img src="./screenshots/splash 4.png"></img>

## Features & Implementation

### Image search

Search requests are made through the Bing Image Search API (it was cheaper) and image objects with `title`, `thumbUrl` (source url for the image's thumbnail), and `url` (source url for the image) are constructed in the frontend store. Just the thumbnails are loaded in the search results.

<img src="./screenshots/search.png"></img>

### Image render

Upon navigation to an image, the store records the image in the frontend store as the `currentImage` and the full image is loaded. Magnificent.js was used to implement pan and zoom.

If logged in, a favorite icon is visible in the header that allows the user to favorite or unfavorite an image. If the image was from a search result, favoriting the image commits the image to the database.

<img src="./screenshots/image 1.png"></img>
<img src="./screenshots/image 2.png"></img>

### Favorites

Users and images are stored in different tables in the database, and a favorites join table connects the two. Upon navigation to the favorites page, an API call is made to request a user's favorites.

<img src="./screenshots/favorites 1.png" width="100%"></img>
<img src="./screenshots/favorites 2.png" width="100%"></img>

### Collections

Favorited images can be collected into collections. Images and collections are stored in different tables in the database, and a collected_images join table connects images with collections. A collection has a `title`, `description`, and `user_id`.

Upon navigation to the user's favorites page, an API call is made to request the user's collections. Upon navigation to a collection's page, an API call is made to request the collection's images. For collection icons, the API call requests one image at random from each collection's images.

<img src="./screenshots/collection 1.png"></img>
<img src="./screenshots/collection 2.png"></img>

Collections can be created, read, updated, and destroyed. Creation and update forms do not redirect to new routes or components, but are revealed and hidden using semantic HTML5, CSS selectors, and jQuery.

<img src="./screenshots/new collection 1.png"></img>
<img src="./screenshots/new collection 2.png"></img>
<img src="./screenshots/new collection 3.png"></img>
<img src="./screenshots/new collection 4.png"></img>

```Javascript
collectImages(){
  $('.favorites').addClass('invisible');
  $('.form_header').addClass('visible');
  $('.errors').addClass('invisible');

  $('.images ul').off();
  $('.images ul').on('click', 'li', this.collectImage.bind(this));

  $('.images ul').addClass('collecting');

  window.scrollTo(0,0);
}

_toForm(){
  this.setState({toForm: false});
  $('.new_collection').addClass('visible');

  window.scrollTo(0,0);
}

_fromForm(){
  this.setState({toForm: true});
  $('.new_collection').removeClass('visible');
}

_exitForm(){
  $('.form_header').removeClass('visible');
  $('.new_collection').removeClass('visible');
  $('.favorites').removeClass('invisible');
  $('.images li').removeClass('collected');
  $('.errors').addClass('invisible');

  $('.images ul').off();
  $('.images ul').on('click', 'li', e => this.props.router.push(`/images/${e.currentTarget.id}`));

  $('.images ul').removeClass('collecting');

  this.setState(this.defaultState);

  window.scrollTo(0,0);
}

_submitForm(){
  this.props.createCollection(
    {
      collection: {
        title: this.state.title,
        description: this.state.description
      }
    },
    {
      collectedImages: this.state.collectedImages
    }
  );

  this._exitForm();

  $('.errors').removeClass('invisible');
}
```

A set of image search results can be instantly collected with chained AJAX requests to the backend to create a collection and then add to it the images. The full Redux cycle is detailed below.

```Javascript
// action is dispatched
  _searchCollect(e){
    e.preventDefault();
    if(!this.props.currentUser){
      this.props.router.push('/addSession');
    } else {
      this.props.createSearchCollection(location.hash.match(/search\/(.*)\?/)[1], this.props.images);
      this.props.router.push('/favorites');
      $('.search_header input').val('');
      $('.search_header').removeClass('visible');
    }
  }

// action hits collections middleware
  case CollectionsActions.CREATE_COLLECTION:
    success = (collection => dispatch(receiveCollection(collection)));
    CollectionsAPI.createCollection(action.collection, action.collectedImages, success, errors);
    return next(action);

// ajax requests made to API
export const createCollection = (collection, collectedImages, success, error) => {
  $.post({
    url: 'api/collections/',
    data: collection,
    success: () => {
      $.post({
        url: 'api/collected_images/collect',
        data: collectedImages,
        success
      });
    },
    error
  });
};
```

```Ruby
# collections controller receives first request
def create
	@collection = Collection.new(collection_params)
	@collection.user_id = current_user.id
	if @collection.save
		render 'api/collections/show'
	else
		render json: @collection.errors.full_messages, status: 422
	end
end

# collected_images controller receives second request
def collect
	@collection = Collection.last
	if params[:collectedImages]
		params[:collectedImages].each do |image_id|
			CollectedImage.create(image_id: image_id, collection_id: @collection.id)
		end
	end
	render 'api/collections/show'
end
```

```Javascript
// collections reducer receives new collection
  case CollectionsActions.RECEIVE_COLLECTION:
    newState.collections.push(action.collection);
    newState.errors = [];
    return newState;
```

### User authentication

Users can sign up, login, and logout. Passwords are encrypted with BCrypt. Backend authentication uses session tokens. A logged-in user is communicated to the frontend by bootstrapping the user to the window, then preloading the frontend store with the user or null.

<img src="./screenshots/auth_form.png"></img>

#### Responsive design

Packery was used to responsively format and animate images.

<img src="./screenshots/packery 1.png"></img>
<img src="./screenshots/packery 2.png"></img>
