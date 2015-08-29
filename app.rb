require 'sinatra'
require 'tilt/erubis'
require 'shotgun'

get '/' do
  erb :index
end