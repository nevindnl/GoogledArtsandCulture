class Collection < ActiveRecord::Base
  has_many :collected_images, dependent: :destroy
  has_many :images, through: :collected_images
  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings
  belongs_to :user
end
