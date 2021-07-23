Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # for authentication
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :students, only: :create do
    resources :books, only: %i[create update destroy]
  end
  resources :books, only: :index
  resources :categories, only: :index
end
