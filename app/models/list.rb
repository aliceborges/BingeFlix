# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  validates :title, :user_id, presence: true

  has_many :list_movies,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :ListMovie

end
