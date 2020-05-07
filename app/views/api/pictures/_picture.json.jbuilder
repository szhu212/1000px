json.extract! picture, :id, :title, :author_id, :description, :equipment_or_material, :editors_choice, :created_at
json.likers picture.likers.pluck(:liker_id)
json.photoUrl url_for(picture.picture)
json.authorName picture.author.username