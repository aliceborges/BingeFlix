class Api::GenresController < ApplicationController
  before_action :deny_access_if_not_logged_in

  def index
    @genres = Genre.all
  end

  def show
    @genre = Genre.find_by(id: params[:id])
  end
end
