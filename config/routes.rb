Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :images, only: [:index]
    resources :collections, only: [:index, :create, :destroy, :update]

    get 'images/favorites', to: 'images#favorites'
    get 'images/collection', to: 'images#collection'
    get 'collections/favorites', to: 'collections#favorites'
    post 'collected_images/collect', to: 'collected_images#collect'
    post 'collected_images/recollect', to: 'collected_images#recollect'

    get 'collections/:id', to: 'collections#show'
    get 'images/:id', to: 'images#show'

    post 'images/favorite', to: 'images#favorite'
  end
end
