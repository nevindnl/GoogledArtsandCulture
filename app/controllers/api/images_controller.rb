class Api::ImagesController < ApplicationController
  def index
    @images = Image.all.take(20)
  end
end
