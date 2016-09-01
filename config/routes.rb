Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :images, only: [:index]
    resources :collections, only: [:index]

    get 'images/favorites', to: 'images#favorites'
    get 'collections/favorites', to: 'collections#favorites'
  end
end
