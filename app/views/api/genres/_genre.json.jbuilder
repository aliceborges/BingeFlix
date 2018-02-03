  json.id genre.id
  json.name genre.name
  json.movies do json.array! genre.movies do |movie|
      json.extract! movie, :id, :title, :year, :blurb, :image_url, :video_url
    end
  end
