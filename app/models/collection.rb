class Collection < ActiveRecord::Base
  validates :title, length: {minimum: 1, maximum: 150}
  validates :description, length: {maximum: 800}
  validates :title, uniqueness: {scope: :user_id, message: 'has already been used'}

  has_many :collected_images, dependent: :destroy
  has_many :images, through: :collected_images
  belongs_to :user
end
