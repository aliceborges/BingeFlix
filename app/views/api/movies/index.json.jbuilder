@movies.each do |movie|
  json.set! movie.id do
    json.id movie.id
    json.title movie.title
    json.image_url movie.image_url
  end
end
