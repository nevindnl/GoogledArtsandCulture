json.id @image.id
json.title @image.title
json.description @image.description
json.url @image.url
json.thumbUrl @image.thumbUrl
json.favorited (current_user && current_user.images.include?(@image))
