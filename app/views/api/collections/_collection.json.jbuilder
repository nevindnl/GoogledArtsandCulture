json.extract! collection, :id, :title, :description, :user_id
json.set! :firstImage do
  json.partial! collection.images.sample, partial: 'api/images/image', as: :image
end
