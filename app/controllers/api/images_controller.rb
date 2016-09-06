class Api::ImagesController < ApplicationController
  def index
    @images = Image.all.take(20)
  end

  def favorites
    @images = current_user.images
  end

  def collection
    @collection = Collection.find_by_id(params[:id])
    @images = @collection.images
  end
end
