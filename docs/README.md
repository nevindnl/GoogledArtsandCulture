# Googled Arts and Culture

[Heroku link][heroku]

[heroku]: http://www.googled.herokuapp.com

## Minimum Viable Product

Googled Arts and Culture is a web application, inspired by Google Arts and Culture, that displays and curates Google Image Results in place of famous artwork. It will be built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Image CRUD
- [ ] Collections for images
- [ ] Favorites/Tags
- [ ] Hi-res zoom
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Images Model, API, and components (2 days)

**Objective:** Images can be created, read, edited and destroyed through
the API.

- [ ] `Image` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for images (`ImagesController`)
- [ ] JBuilder views for images
- Image components and respective Redux loops
  - [ ] `ImageIndex`
  - [ ] `ImageIndexItem`
  - [ ] `ImageForm`
- [ ] Style images components
- [ ] Seed images

### Phase 3: Collections (2 day)

**Objective:** Images belong to Collections that can be created, read, edited and destroyed through the API.

- [ ] `Collection` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for collections (`CollectionsController`)
- [ ] JBuilder views for collections
- [ ] Adding images requires a collection
- [ ] Moving images between collections
- [ ] Viewing images by collection
- [ ] Style collection components
- [ ] Seed collections

### Phase 4: Favorites and Tags (1 day)

**Objective:** Images can be favorited, tagged with multiple tags, and tags are searchable.

- [ ] Fetching favorited images
- [ ] Favoriting images

- [ ] `Tag` model and `Taggings` join table
- [ ] Fetching tags for images
- [ ] Adding tags to images
- [ ] Searching images by tag
- [ ] Style search & tag components
- [ ] Seed tags with seed data

### Phase 5: Allow hi-res zoom. (1 day)

- [ ] Integrate Overscroll.js, Magnifier.js, to implement zoom.
- [ ] Style Zoom components.

### Phase 6: - CSS (1 day)

**objective:** Perfect CSS.

### Bonus Features (TBD)
- [ ] Search images
- [ ] Organize by popularity, date, color
