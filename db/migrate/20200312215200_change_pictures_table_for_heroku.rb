class ChangePicturesTableForHeroku < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :description, :string, null: false
  end
end
