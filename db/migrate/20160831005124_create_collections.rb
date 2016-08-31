class CreateCollections < ActiveRecord::Migration
  def change
    create_table :collections do |t|
      t.string :category
      t.string :title, null: false
      t.text :description, null: false
      t.integer :user_id, default: 1

      t.timestamps null: false
    end

    add_index :collections, :user_id
    add_index :collections, :title
    add_index :collections, :category
    add_index :collections, :description
  end
end
