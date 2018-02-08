class Api::ListMoviesController < ApplicationController
  before_action :deny_access_if_not_logged_in

  def index
    @listMovies = ListMovie.all.where(user_id: current_user.id)
  end

  def create
    @listMovie = ListMovie.new(list_movie_params)
    if @listMovie.save
      render :show
    else
      render json: @listMovie.errors.full_messages, status: 422
    end
  end


  def show
    @listMovie = ListMovie.find_by(id: params[:id])
    if @listMovie
      render :show
    else
      render json: "Sorry, but that listMovie was not found", status: 404
    end
  end


  def destroy
    @listMovie = ListMovie.find_by(user_id: params[:user_id], movie_id: params[:movie_id])
    if @listMovie
      if @listMovie.destroy
        render json: {}
      else
        render json: "Couldn't detroy ListMovie", status: 422
      end
    else
      render json: "Couldn't find so can't delete", status: 404
    end
  end


  private

  def list_movie_params
    params.require(:list_movie).permit(:movie_id, :list_id, :user_id)
  end

end
