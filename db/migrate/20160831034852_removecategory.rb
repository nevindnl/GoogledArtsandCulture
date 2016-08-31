class Removecategory < ActiveRecord::Migration
  def change
		remove_column :collections, :category
  end
end
