# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class List < ApplicationRecord
  validates :user_id, presence: true

  has_many :list_movies,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :ListMovie

  has_many :movies,
    through: :list_movies,
    source: :movie

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
