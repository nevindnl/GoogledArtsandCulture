class Api::ImagesController < ApplicationController
  def index
    @images = Image.all.take(20)
  end

  def favorites
    @images = current_user.images
    render :favorites
  end
end
