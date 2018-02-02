# == Schema Information
#
# Table name: movies
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  blurb      :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string           not null
#  video_url  :string           not null
#

class Movie < ApplicationRecord
  validates :title, :year, :blurb, :image_url, presence: true

  has_many :movie_genres,
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: :MovieGenre

  has_many :genres,
    through: :movie_genres,
    source: :genre
end
