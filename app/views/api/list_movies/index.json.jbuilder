@listMovies.each do |listMovie|
  json.set! listMovie.id do
    json.id listMovie.id
    json.list_id listMovie.list_id
    json.movie_id listMovie.movie_id
  end
end
