class Api::CollectedImagesController < ApplicationController
  def collect
    @collection = Collection.last
    if params[:collectedImages]
      params[:collectedImages].each do |image_id|
        CollectedImage.create(image_id: image_id, collection_id: @collection.id)
      end
    end
    render 'api/collections/show'
  end

  def recollect
    @collection = Collection.find_by_id(params[:id])
    CollectedImage.delete_all(collection_id: params[:id])
    if params[:collectedImages]
      params[:collectedImages].each do |image_id|
        CollectedImage.create(image_id: image_id, collection_id: @collection.id)
      end
    end
    render 'api/collections/show'
  end
end
