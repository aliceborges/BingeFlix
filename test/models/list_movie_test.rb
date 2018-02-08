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

require 'test_helper'

class ListMovieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
