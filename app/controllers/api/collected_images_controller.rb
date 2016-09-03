class Api::CollectedImagesController < ApplicationController
  def collect
    collection_id = Collection.last.id
    params[:collectedImages].each do |image_id|
      CollectedImage.create(image_id: image_id, collection_id: collection_id)
    end
    @collection = Collection.last
    render 'api/collections/show'
  end
end
