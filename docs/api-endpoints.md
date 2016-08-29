# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Images

- `GET /api/images/`
  - Images index/search
	- accepts `name` query param
  - accepts `tag_name` query param
- `GET /api/images/:id`

### Collections

- `GET /api/collections`
  - Get one image per collection
- `POST /api/collections`
- `DELETE /api/collections/:id`
- `GET /api/collections/:id/`
  - Get all images for collection

### Favorites

- `GET /api/favorites`
- `POST /api/favorites`
- `DELETE /api/favorites/:id`
