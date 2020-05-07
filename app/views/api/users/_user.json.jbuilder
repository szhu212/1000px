json.extract! user, :id, :username
json.avatarUrl url_for(user.avatar) if user.avatar.attached?