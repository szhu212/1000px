class EditPicturesTable < ActiveRecord::Migration[5.2]
  def change
    add_index :pictures, :author_id, unique: true
  end
end
