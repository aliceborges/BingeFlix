class Api::ListMoviesController < ApplicationController

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
  end

  def destroy
    @listMovie = ListMovie.find_by(id: params[:id])
    if @listMovie
      if @listMovie.destroy
        render json: {}
      else
        render json: "Couldn't detroy ListMovie", status: 422
      end
    else
      render json: "Couldn't find so can't destroy", status: 404
    end
  end


  private

  def list_movie_params
    params.require(:list_movie).permit(:movie_id, :list_id)
  end

end
