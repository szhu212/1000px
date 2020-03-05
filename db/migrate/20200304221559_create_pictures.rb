class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.string :equipment_or_material,  null: false
      t.boolean :editors_choice, null: false
      t.timestamps
    end
  end
end
