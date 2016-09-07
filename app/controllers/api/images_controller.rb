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

  def show
    @image = Image.find_by_id(params[:id])
  end

  def favorite
    @image = Image.find_by_id(params[:id])
    if current_user.images.include?(@image)
      @favorite = current_user.favorites.find{|favorite| favorite.image_id == @image.id}
      @favorite.destroy
    else
      Favorite.create(user_id: current_user.id, image_id: @image.id)
    end
    
    render json: {}
  end
end
