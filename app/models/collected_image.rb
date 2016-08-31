class CollectedImage < ActiveRecord::Base
  belongs_to :collection
  belongs_to :image
end
