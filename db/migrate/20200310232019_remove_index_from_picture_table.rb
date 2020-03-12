class RemoveIndexFromPictureTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :pictures, :author_id
  end
end
