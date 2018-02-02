# == Schema Information
#
# Table name: movie_genres
#
#  id         :integer          not null, primary key
#  movie_id   :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class MovieGenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
