json.extract! picture, :id, :title, :author_id, :description, :equipment_or_material, :editors_choice, :created_at
json.likers picture.likers.pluck(:liker_id)
json.photoUrl url_for(picture.picture)
json.authorId picture.author.id
json.authorName picture.author.username
json.authorAvatarUrl url_for(picture.author.avatar) if picture.author.avatar.attached?