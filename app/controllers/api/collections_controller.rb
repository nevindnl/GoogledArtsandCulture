class Api::CollectionsController < ApplicationController
  def index
    @collections = Collection.all.take(20)
  end
end
