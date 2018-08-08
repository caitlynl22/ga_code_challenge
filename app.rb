require 'sinatra'

# GET index, in this case, how we'll eventually serve the application with minified JS
get '/' do
  File.read(File.expand_path('index.html', settings.public_folder))
end

# GET /favorites will return json of all favorite movies
get '/favorites' do
  response.header['Content-Type'] = 'application/json'
  File.read('data.json')
end

# POST /favorites will post new favorite movie to database and return added movie
post '/favorites' do
  file = JSON.parse(File.read('data.json'))
  unless params[:name] && params[:oid]
    return 'Invalid Request'
  end
  movie = { name: params[:name], oid: params[:oid] }
  file << movie
  File.write('data.json',JSON.pretty_generate(file))
  movie.to_json
end
