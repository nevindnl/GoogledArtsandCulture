class Api::CollectedImagesController < ApplicationController
  def collect
    collection_id = Collection.last.id
    params[:collectedImages].each do |image_id|
      CollectedImage.create(image_id: image_id, collection_id: collection_id)
    end
    @collection = Collection.last
    render 'api/collections/show'
  end

  def recollect
    @collection = Collection.find_by_id(params[:id])
    @collection.collected_images.each{|collect| collect.destroy}
    params[:collectedImages].each do |image_id|
      CollectedImage.create(image_id: image_id, collection_id: @collection.id)
    end
    render 'api/collections/show'
  end
end
