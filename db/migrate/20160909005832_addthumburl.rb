class Addthumburl < ActiveRecord::Migration
  def change
    drop_table :tags
    drop_table :taggings

    add_column :images, :thumbUrl, :string, null: false
  end
end
