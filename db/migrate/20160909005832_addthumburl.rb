class Addthumburl < ActiveRecord::Migration
  def change
    add_column :images, :thumbUrl, :string, null: false
  end
end
