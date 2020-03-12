class ChangePictureTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :pictures, :editors_choice
    add_column :pictures, :editors_choice, :boolean, default: false
  end
end
