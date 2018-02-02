@movies.each do |movie|
  json.set! movie.id do
    json.id movie.id
    json.year movie.year
    json.title movie.title
    json.blurb movie.blurb
    json.image_url movie.image_url
  end
end
