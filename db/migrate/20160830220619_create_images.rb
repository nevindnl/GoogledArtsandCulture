class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :title
      t.text :description
      t.string :url, null: false

      t.timestamps null: false
    end

    add_index :images, :title
    add_index :images, :description
  end
end
