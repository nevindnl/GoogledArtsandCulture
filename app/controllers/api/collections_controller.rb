class Api::CollectionsController < ApplicationController
  def index
    @collections = Collection.all.take(20)
  end

  def favorites
    @collections = current_user.collections
    render :favorites
  end
end
