Rails.application.routes.draw do
  get 'plans/index'

  root to: 'visitors#index'
  devise_for :users, :controllers => { omniauth_callbacks: 'omniauth_callbacks', :sessions => "sessions", :registrations => 'registrations' },
   path_names: { sign_in: 'login', sign_out: 'logout', password: 'secret', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: 'cmon_let_me_in' }

  resources :users

  match '/users/:id/finish_signup' => 'users#finish_signup', via: [:get, :patch], :as => :finish_signup
end
