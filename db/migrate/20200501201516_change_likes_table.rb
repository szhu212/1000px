class ChangeLikesTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, :column => [:liker_id, :photo_id]
    remove_column :likes, :photo_id
    add_column :likes, :picture_id, :integer
    add_index :likes, [:liker_id, :picture_id], unique: true
  end
end
