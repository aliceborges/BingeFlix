# == Schema Information
#
# Table name: list_movies
#
#  id         :integer          not null, primary key
#  list_id    :integer          not null
#  movie_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class ListMovie < ApplicationRecord
  validates :list_id, :movie_id, presence: true
  validates :list_id, uniqueness: { scope: :movie_id }

  belongs_to :list,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :List

  belongs_to :movie,
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: :Movie

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
