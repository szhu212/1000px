    json.extract! @picture, :id, :title, :author_id, :description, :equipment_or_material, :editors_choice
    json.photoUrl url_for(@picture.picture)
   
    json.authorName @picture.author.username

   

