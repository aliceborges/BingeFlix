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

  has_many :movie_genres,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: :Genre

  has_many :movies,
    through: :movie_genres,
    source: :movie
end
