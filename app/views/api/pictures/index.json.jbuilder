@pictures.each do |picture|
    json.set! picture.id do 
         json.extract! picture, :id, :title, :author_id, :description, :equipment_or_material
         json.photoUrl url_for(picture.picture)
    end 
end