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

Image.create!(title: 'apple', url: 'apple.com')
Image.create!(title: 'orange', url: 'orange.com')
