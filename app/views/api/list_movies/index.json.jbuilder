@listMovies.each do |listMovie|
  json.set! listMovie.movie_id do
    json.extract! listMovie.movie, :title, :blurb, :year, :image_url, :video_url
    json.id listMovie.id
    json.list_id listMovie.list_id
    json.movie_id listMovie.movie_id
  end
end
