class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.string :taggable_type, null: false
      t.integer :taggable_id, null: false

      t.timestamps null: false
    end

    add_index :taggings, [:taggable_type, :taggable_id]
    add_index :taggings, :tag_id
  end
end
