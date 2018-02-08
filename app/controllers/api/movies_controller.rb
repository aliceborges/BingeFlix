class Api::MoviesController < ApplicationController
  before_action :deny_access_if_not_logged_in

  def index
    @movies = Movie.all
  end

  def show
    @movie = Movie.find_by(id: params[:id])
  end
end
