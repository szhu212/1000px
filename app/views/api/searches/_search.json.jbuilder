json.extract! picture, :id, :title, :description
json.authorName picture.author.username
json.photoUrl url_for(picture.picture)