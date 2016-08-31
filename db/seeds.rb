# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: 'apple', password: 'apples')
User.create!(username: 'banana', password: 'bananas')
User.create!(username: 'orange', password: 'oranges')
User.create!(username: 'watermelon', password: 'watermelons')

100.times do
  Image.create!(title: Faker::Name.name, description: Faker::Lorem.characters(20), url: Faker::Avatar.image)
end

20.times do
  Collection.create!(title: Faker::Company.name, description: Faker::Lorem.sentence, user_id: rand(4) + 1)
end

(1..20).each do |collection_id|
  (1..100).to_a.sample(10).each do |image_id|
    CollectedImage.create!(collection_id: collection_id, image_id: image_id)
  end
end

colors = []
colors.push(Faker::Color.color_name) until colors.uniq.length == 10
colors = colors.uniq

10.times do |i|
  Tag.create!(name: colors[i])
end

(1..4).each do |user_id|
  (1..100).to_a.sample(30).each do |image_id|
    Favorite.create!(user_id: user_id, image_id: image_id)
  end
end

(1..100).each do |image_id|
  (1..10).to_a.sample(3).each do |tag_id|
    Tagging.create!(taggable_type: 'image', taggable_id: image_id, tag_id: tag_id)
  end
end

(1..20).each do |collection_id|
  (1..10).to_a.sample(2).each do |tag_id|
    Tagging.create!(taggable_type: 'collection', taggable_id: collection_id, tag_id: tag_id)
  end
end
