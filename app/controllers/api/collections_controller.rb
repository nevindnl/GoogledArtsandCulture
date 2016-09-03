class Api::CollectionsController < ApplicationController
  def index
    @collections = Collection.all.take(20)
  end

  def favorites
    @collections = current_user.collections
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

  private

  def collection_params
    params.require(:collection).permit(:title, :description)
  end
end
