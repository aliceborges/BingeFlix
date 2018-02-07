class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def show
    @list = List.find_by(id: params[:id])
  end

  def destroy
    @list = List.find_by(id: params[:id])
    if @list
      if @list.destroy
        render json: {}
      else
        render json: "Couldn't detroy list", status: 422
      end
    else
      render json: "Couldn't find so can't destroy", status: 404
    end
  end

  private
  def list_params
    params.require(:list).permit(:title)
  end
end
