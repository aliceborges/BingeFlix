Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only:[:create] do
      resources :movies, only:[:update] do
        resource :list_movies, only:[:destroy]
      end
      resource :list, only:[:create, :show]
    end
    resource :session, only:[:create, :destroy]
    resources :movies, only:[:index, :show]
    resources :genres, only:[:index, :show]
    resources :list_movies, only:[:create, :destroy, :show, :index]
  end
end
