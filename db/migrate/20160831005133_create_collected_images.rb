class CreateCollectedImages < ActiveRecord::Migration
  def change
    create_table :collected_images do |t|
      t.integer :image_id, null: false
      t.integer :collection_id, null: false

      t.timestamps null: false
    end

    add_index :collected_images, :image_id
    add_index :collected_images, :collection_id
  end
end
