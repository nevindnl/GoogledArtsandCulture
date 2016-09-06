class Api::CollectionsController < ApplicationController
  def index
    @collections = Collection.all.take(20)
  end

  def favorites
    @collections = current_user.collections
  end

  def show
    @collection = Collection.find_by_id(params[:id])
  end

  def create
    @collection = Collection.new(collection_params)
    @collection.user_id = current_user.id
    if @collection.save
      render 'api/collections/show'
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def update
    @collection = Collection.find_by_id(collection_params[:id])
    if @collection.update(collection_params)
      render json: {}
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end

  def destroy
    @collection = Collection.find_by_id(params[:id])
    @collection.destroy
    render json: {}
  end

  private

  def collection_params
    params.require(:collection).permit(:id, :title, :description)
  end
end
