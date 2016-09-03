class Collection < ActiveRecord::Base
  validates :title, length: {minimum: 2, maximum: 150}
  validates :description, length: {maximum: 800}

  has_many :collected_images, dependent: :destroy
  has_many :images, through: :collected_images
  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings
  belongs_to :user
end
