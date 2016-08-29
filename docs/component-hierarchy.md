## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - NavBar

**CollectionsContainer**
 - CollectionsHeader
  * CollectionIndex

**ImagesContainer**
 - ImagesHeader
 	- FavoriteContainer
  + ImageIndex

**SearchResultsContainer**
 - Search
 - CollectionsContainer
 - ImagesContainer

**ImagesIndex**
 - ImageIndexItem
  + ImageDetail
    * Image

**NewCollectionContainer**
 - NewCollection

**FavoriteContainer**
 - Favorite

**FavoritesContainer**
 - CollectionsContainer
 - ImagesContainer

**Search**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/image/:imageId" | "ImagesContainer" |
| "/home/collection/:collectionId" | "CollectionContainer" |
| "/home/favorites/ | "FavoritesContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/search" | "Search" |
| "/new-collection" | "NewCollectionContainer" |
