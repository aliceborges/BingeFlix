@movies.each do |movie|
  json.set! movie.id do
    json.id movie.id
    json.title movie.title
    json.image_url asset_path(movie.image_url)
  end
end
