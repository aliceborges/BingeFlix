json.id list.id
json.movies do
  json.array! list.movies do |movie|
    json.extract! movie, :id, :title, :year, :blurb, :image_url, :video_url
  end
end
