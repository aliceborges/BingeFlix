# == Schema Information
#
# Table name: genres
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord
  validates :name, presence: true

  has_many :genre_movies,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: :GenreMovie

  has_many :movies,
    through: :genre_movies,
    source: :movie
end
