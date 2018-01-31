  json.id @movie.id
  json.title @movie.title
  json.year @movie.year
  json.blurb @movie.blurb
  json.image_url asset_path(@movie.image_url)
