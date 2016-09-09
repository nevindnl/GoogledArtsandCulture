class Changedesc < ActiveRecord::Migration
  def change
    change_column :collections, :description, :text, :null => true
  end
end
